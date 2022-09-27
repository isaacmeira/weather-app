import React from 'react';

import './styles.scss';
import type { TypographyTypes } from './types';
import cn from 'classnames';

const Typography : React.FC<TypographyTypes> = ({ content, size, color, variant, margin }) => {
  return (
    <span className={cn('typography', `typography--${variant}`)} style={{fontSize: size, color: color, 
      marginTop: margin?.top,
      marginBottom: margin?.bottom,
      marginLeft: margin?.left,
      marginRight: margin?.right
    }} >{content}</span>
  );
}

export default Typography ;