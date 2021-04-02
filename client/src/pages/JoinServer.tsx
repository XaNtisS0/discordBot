import { css } from '@emotion/css';
import { FC, useState } from 'react';
import { SelectedServer } from '../components/JoinServer/SelectedServer';
import { Servers } from '../components/JoinServer/Servers';
import { Logo } from '../components/shared/Logo';

export const JoinServer: FC = () => {
  const [selectedServer] = useState(-1);

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
      {selectedServer < 0 ? <div /> : <SelectedServer />}
      <Logo
        styles={css`
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1.5rem;
        `}
        size="small"
      ></Logo>
    </div>
  );
};
