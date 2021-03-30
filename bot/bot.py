import discord
import os
import requests
from dotenv import load_dotenv

load_dotenv(os.path.join(os.getcwd(), '.env'))

intents = discord.Intents.default()
intents.members = True
client = discord.Client(intents=intents)

api_server = "http://api-server:5000"
webpage = ""

# invite link:
# https://discord.com/api/oauth2/authorize?client_id=799365421902987305&permissions=469896208&scope=bot

# Permisions:
#	Manage roles
#	Manage channels
#	View channels
#	Send messages
#	Mention everyone

# What admin should do before adding:
#	Add users and roles to them.
#	Add role with name 'members-admin'
#	Add channel with name 'members-bot-log'


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_member_join(member):
    # Get server name
    guild = member.guild
    # Create or get members-admin role
    admin_role = discord.utils.get(guild.roles, name='members-admin')
    if not admin_role:
        await guild.create_role(name='members-admin')
    admin_role = discord.utils.get(guild.roles, name='members-admin')
    # Get api/servers/
    get_servers = requests.get(f'{api_server}/api/servers/').json()
    if (get_servers['success'] == False):
        print(get_servers['error'])
        return 0
    get_servers = get_servers['data']
    # Get channel with name="bot-log" for logging
    logging_channel = discord.utils.get(guild.channels, name="bot-log")
    if not logging_channel:
        created_channel = await guild.create_text_channel("bot-log")
        logging_channel = created_channel
    server = {}
    # Check which server is the one we want and save info
    for i, d in enumerate(get_servers):
        if d['name'] == guild.name:
            server = get_servers[i]
    if server == {}:
        await logging_channel.send(f'{admin_role.mention} go to {webpage} to add server to bot database.')
        return 0
    # Get api/{server_id}/users
    server_id = server['_id']
    get_users = requests.get(
        f'{api_server}/api/users/server/{server_id}').json()
    if (get_users['success'] == False):
        print(get_users['error'])
        return 0
    get_users = get_users['data']
    # If loged in user is on the list of users then give him the roles from list
    db_user = {}
    for user in get_users:
        if user['username'] == member.name:
            db_user = user
    if db_user == {}:
        await logging_channel.send(f'{admin_role.mention} Unknown user: {str(member.mention)}')
        return 0
    user_ranks = db_user['ranks']
    for rank in user_ranks:
        if rank not in guild.roles:
            await guild.create_role(name=rank)
        await member.add_roles(discord.utils.get(guild.roles, name=rank))

    #	send information to user that he need to contact administrator to change username in whitelist or manually add role

client.run(os.getenv('TOKEN'))
