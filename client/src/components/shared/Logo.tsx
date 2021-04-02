import { css } from '@emotion/css';
import { FC } from 'react';
import logo from '../../images/logo.svg';
import { underline } from '../../styles/underline';

interface ILogo {
  size: 'big' | 'small';
}

export const Logo: FC<ILogo> = ({ size }) => {
  const Name = () => {
    return (
      <div className={css({ display: 'flex', alignItems: 'center', flexDirection: 'column' })}>
        <h1 className={underline}>DISCORD</h1>
        <h4>AUTO-ADDER</h4>
      </div>
    );
  };

  return (
    <div>
      <img src={logo} className={css({ width: size === 'big' ? '270px' : '110px' })} />
      {size === 'big' && <Name />}
    </div>
  );
};
