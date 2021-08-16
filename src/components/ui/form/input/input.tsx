import React from 'react';
import { InputProps } from './input.type';
import cn from 'classnames';
import styles from './input.module.css';
const input = ({ sizeVariant, full, ...rest }: InputProps) => {
  const root = cn(styles, {
    [styles.medium]: sizeVariant === 'medium',
    [styles.full]: full
  });

  return <input className={root} {...rest} />;
};

input.defaultProps = {
  type: 'text',
  sizeVariant: 'medium'
};

export default input;
