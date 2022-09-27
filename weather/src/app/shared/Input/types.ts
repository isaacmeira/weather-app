import type React from 'react';

export type InputType = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
} & React.HTMLAttributes<HTMLDivElement>;
