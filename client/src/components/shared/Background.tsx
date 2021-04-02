import { css } from '@emotion/css';
import vector from '../../images/vector.svg';
import subtract from '../../images/subtract.svg';
import { FC } from 'react';

interface IBackground {
  children: React.ReactNode;
}

export const Background: FC<IBackground> = ({ children }) => {
  return (
    <div className={css({ backgroundColor: '#343A40', height: '100vh', display: 'grid', placeItems: 'center' })}>
      <img src={vector} className={css({ position: 'absolute', top: 0, right: 0 })} />
      <img src={subtract} className={css({ position: 'absolute', bottom: 0, left: 0 })} />
      {children}
    </div>
  );
};
