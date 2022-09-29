import React from 'react';
import cn from 'classnames';
import Icons from '../../assets/icon';

import type { InputType } from './types';
import './styles.scss'

const Input: React.FC<InputType> = ({ content, className }) => {
  return (
    <div className={cn('input', `input--${className}`)}>
      <Icons name='location' />
      <input>{content}</input>
    </div>
  )
}

export default Input;