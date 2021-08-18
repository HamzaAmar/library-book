import React from 'react';
import { ButtonProps } from './button.type';
import styles from './button.module.css';
import cn from 'classnames';

const button = (props: ButtonProps) => {
  const {
    radius,
    children,
    icon,
    iconPosition,
    variant,
    color,
    size,
    ...rest
  } = props;

  console.log('this is the value of color', color);

  const root = cn(styles.btn, {
    [styles.rounded]: radius === 'rounded',
    [styles.none]: radius === 'none',
    [styles.full]: radius === 'full',
    [styles.contained]: variant === 'contained',
    [styles.outline]: variant === 'outline',
    [styles.text]: variant === 'text',
    [styles.icon]: variant === 'icon',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.success]: color === 'success',
    [styles.error]: color === 'error',
    [styles.warning]: color === 'warning',
    [styles.transparent]: color === 'transparent',
    [styles.white]: color === 'white',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large'
  });
  const left = icon && iconPosition === 'start';
  const right = icon && iconPosition === 'end';

  return (
    <button className={root} {...rest}>
      {iconPosition === 'start' && icon && icon}
      <span
        className={cn({
          [styles.leftMargin]: left,
          [styles.rightMargin]: right
        })}
      >
        {children}
      </span>
      {iconPosition === 'end' && icon && icon}
    </button>
  );
};

button.defaultProps = {
  type: 'button',
  iconPosition: 'start',
  rounded: false,
  variant: 'contained',
  color: 'primary',
  radius: 'none'
};

export default button;
