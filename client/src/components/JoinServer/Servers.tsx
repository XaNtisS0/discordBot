import { css } from '@emotion/css';
import { FC } from 'react';
import { IServer, Server } from './Server';

interface IServers {
  servers: IServer[];
}

export const Servers: FC<IServers> = ({ servers }) => {
  return (
    <div
      className={css`
        padding: 1rem;
        position: relative;
        border-radius: 0 64px 64px 0;
        background: linear-gradient(#4158d0, #c850c0);
        padding: 3px 3px 3px 0;
      `}
    >
      <div
        className={css`
          padding: 3em 0;
          background-color: #23272c;
          border-radius: 0 64px 64px 0;
          overflow: hidden;
          height: calc(100vh - (6em + 6px));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        {servers.map((server, index) => {
          return <Server name={server.name} key={index} logoUrl={server.logoUrl} people={server.people}></Server>;
        })}
      </div>
    </div>
  );
};
