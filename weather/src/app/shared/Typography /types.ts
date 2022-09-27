import type React from 'react';
import type { ReactNode } from 'react';

export type TypographyTypes = {
  content: ReactNode;
  size?: number;
  color?: string;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  variant?: 'bold' | 'light';
} & React.HTMLAttributes<HTMLDivElement>;
