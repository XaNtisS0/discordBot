import { css } from '@emotion/css';

export const underline = css`
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -4px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 80%;
    background: linear-gradient(0.25turn, #4158d0, #c850c0, #ffcc70);
  }
`;
