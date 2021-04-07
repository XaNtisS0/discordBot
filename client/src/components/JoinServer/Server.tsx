import { css } from '@emotion/css';
import { FC } from 'react';
import person from '../../images/person.svg';
import { SelectServerFunc } from '../../pages/JoinServer';

export interface IServer {
  name: string;
  logoUrl: string;
  people: number;
}

interface IServerComp extends IServer {
  index: number;
  selectServer: SelectServerFunc;
}

export const Server: FC<IServerComp> = ({ index, name, logoUrl, people, selectServer }) => {
  return (
    <div
      className={css`
        margin: 10px;
        width: 90%;
        display: flex;
        justify-content: center;
        &:hover {
          position: relative;
          border-radius: 11px;
          background: linear-gradient(0.25turn, #4158d0, #c850c0);
          padding: 2px;
          cursor: pointer;
        }
      `}
      onClick={() => selectServer(index)}
    >
      <div
        className={css`
          width: 100%;
          height: 42px;
          border-radius: 11px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-color: #343a40;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          &:hover {
            height: 38px;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            max-width: 300px;
          `}
        >
          <img
            src={logoUrl}
            className={css`
              width: 40px;
              height: 40px;
              border-radius: 50%;
            `}
          />
          <h3
            className={css`
              margin-left: 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
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
        </div>
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
    </div>
  );
};
