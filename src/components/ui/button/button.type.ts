import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type Position = 'start' | 'end';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: boolean;
  icon: React.ReactNode;
  iconPosition: Position;
}
