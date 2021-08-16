import { InputHTMLAttributes } from 'react';

type Size = 'small' | 'medium' | 'large';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeVariant: Size;
  full: boolean;
}
