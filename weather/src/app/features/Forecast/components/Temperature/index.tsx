import React from 'react';

import type { TemperatureType } from './types';
import cn from 'classnames';

import './styles.scss'

const Temperature: React.FC<TemperatureType> = ({ variant, info, temperature }) => {

  return (
    <div className={cn('temperature', `temperature--${variant}`)}>
      <div className={cn('info', `info--${temperature}`)}>
        <div className='info__icon'>
          <h1>{info?.weather[0].icon}</h1>
        </div>
        <div className='info__data'>
            { variant === 'full' ? (null) : (
              <>
                <span>Hoje</span>
                <span>25 C</span>
              </>
            ) }
          </div>
      </div>
    </div>
  );
}

export default Temperature;