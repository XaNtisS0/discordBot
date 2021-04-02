import { css } from '@emotion/css';
import { FC } from 'react';
import person from '../../images/person.svg';

export interface IServer {
  name: string;
  logoUrl: string;
  people: number;
}

export const Server: FC<IServer> = ({ name, logoUrl, people }) => {
  return (
    <div
      className={css`
        width: 90%;
        height: 40px;
        border-radius: 11px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #343a40;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `}
    >
      <img
        src={logoUrl}
        className={css`
          width: 40px;
        `}
      />
      <h3
        className={css`
          position: relative;

          &:after {
            position: absolute;
            content: '';
            height: 1px;
            bottom: -3px;
            margin: 0 auto;
            left: 0;
            right: 0;
            width: 90%;
            background-color: #fff;
          }
        `}
      >
        {name}
      </h3>
      <div
        className={css`
          display: flex;
          justify-self: flex-end;
        `}
      >
        <h4
          className={css`
            color: #8bf574;
          `}
        >
          {people}
        </h4>
        <img src={person} />
      </div>
    </div>
  );
};
