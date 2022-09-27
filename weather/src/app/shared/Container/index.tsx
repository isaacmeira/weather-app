import React from 'react';
import cn from 'classnames'

import type { ContainerType } from './types';

import './styles.scss';

const Container: React.FC<ContainerType> = ({ children, background }) => {
  return (
    <div style={{backgroundImage: `url(${background?.url})` }}
     className={cn('default__container', `default__container--${background?.filter}`)}>
      {children}
    </div>
  );
}

export default Container;