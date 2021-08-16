import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type Position = 'start' | 'end';
type Variant = 'contained' | 'outline' | 'text';
type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'transparent';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconPosition?: Position;
  variant: Variant;
  color: Color;
}
