import { css } from '@emotion/css';
import { FC } from 'react';
import { underline } from '../../styles/underline';
import { IServer } from './Server';
import person from '../../images/person.svg';

interface ISelectedServer {
  server: IServer;
}

export const SelectedServer: FC<ISelectedServer> = ({ server }) => {
  const { name, logoUrl, people } = server;

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <img
        src={logoUrl}
        className={css`
          width: 230px;
          height: 230px;
          border-radius: 50%;
        `}
      />
      <h1 className={underline}>{name}</h1>
      <h4
        className={css`
          color: #8bf574;
        `}
      >
        {people} <img src={person} />
      </h4>
    </div>
  );
};
