import type React from 'react';
import type { TemperatureResponseType } from '../../../../hooks/types/temperatureResponseType';

export type TemperatureType = {
  children?: React.ReactNode;
  variant?: 'full' | 'half';
  temperature?: 'warm' | 'cold' | 'hot';
  icon?: string;
  index?: string;
  info?: TemperatureResponseType;
} & React.HTMLAttributes<HTMLDivElement>;
