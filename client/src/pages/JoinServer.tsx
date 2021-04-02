import { css } from '@emotion/css';
import { FC } from 'react';
import { Servers } from '../components/JoinServer/Servers';

export const JoinServer: FC = () => {
  const servers = [
    { name: 'Yees sir', logoUrl: 'https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo.png', people: 3 },
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
