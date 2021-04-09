import { css } from '@emotion/css';
import { FC } from 'react';
import loop from '../../images/loupe.svg';

interface ISearchBar {
  handleChange: (text: string) => void;
}

export const SearchBar: FC<ISearchBar> = ({ handleChange }) => {
  return (
    <form
      className={css`
        width: 90%;
        margin: 0 10px;
      `}
    >
      <input
        className={css`
          padding: 0 5px;
          color: white;
          height: 100%;
          position: relative;
          padding: 0;
          width: 100%;
          background-color: #343a40;
          border: none;
          border-radius: 22.5px;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          &:focus {
            outline: none;
          }
        `}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
      ></input>
      <button
        className={css`
          right: 6%;
          position: absolute;
          z-index: 100;
          border: none;
          background: linear-gradient(180deg, rgba(67, 156, 251, 0.69) 0%, rgba(241, 135, 251, 0.71) 100%);
          border-radius: 22.5px;
          &:hover {
            cursor: pointer;
          }
          &:focus {
            outline: none;
          }
        `}
        type="submit"
      >
        <img src={loop} />
      </button>
    </form>
  );
};
