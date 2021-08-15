import React from 'react';
import { ButtonProps } from './button.type';
import styles from './button.module.css';
import cn from 'classnames';

const button = ({
  children,
  type = 'button',
  rounded = false,
  icon,
  iconPosition = 'start'
}: ButtonProps) => {
  const root = cn(styles.btn, {
    [styles.rounded]: rounded
  });
  return (
    <button type={type} className={root}>
      {iconPosition === 'start' && icon && icon}
      {children}
      {iconPosition === 'end' && icon && icon}
    </button>
  );
};

export default button;
