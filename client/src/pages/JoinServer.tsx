import { css } from '@emotion/css';
import { FC } from 'react';
import { Servers } from '../components/JoinServer/Servers';

export const JoinServer: FC = () => {
  const servers = [
    {
      name: 'Yees sir',
      logoUrl: 'https://i.etsystatic.com/11475894/r/il/150c46/1089120180/il_570xN.1089120180_mulc.jpg',
      people: 3,
    },
    {
      name: 'Yees sir',
      logoUrl: 'https://i.etsystatic.com/11475894/r/il/150c46/1089120180/il_570xN.1089120180_mulc.jpg',
      people: 3,
    },
  ];
  return (
    <div
      className={css({
        height: '100vh',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        width: '100vw',
        border: '',
      })}
    >
      <Servers servers={servers} />
    </div>
  );
};
