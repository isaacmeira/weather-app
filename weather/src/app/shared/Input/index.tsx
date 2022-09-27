import React from 'react';
import cn from 'classnames'

import type { InputType } from './types';
import './styles.scss'

const Input: React.FC<InputType> = ({ content, className }) => {
  return (
    <div className={cn('input', `input--${className}`)}>
      <span>icon</span>
      <input >{content}</input>
    </div>
  )
}

export default Input;