import type React from 'react';

export type ContainerType = {
  children?: React.ReactNode;
  className?: string;
  background?: {
    url: string;
    filter: 'lighter' | 'darker' | 'blur';
  };
} & React.HTMLAttributes<HTMLDivElement>;
