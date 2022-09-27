import type { ReactNode } from 'react';
import React from 'react';

import { ReactComponent as Clear_day } from './icons/clear_day.svg';
import { ReactComponent as Clear_night } from './icons/clear_night.svg';
import { ReactComponent as Few_clouds_day } from './icons/few_clouds_day.svg';
import { ReactComponent as Few_clouds_night } from './icons/few_clouds_night.svg';
import { ReactComponent as Scattered_day } from './icons/scattered_day.svg';
import { ReactComponent as Scattered_night } from './icons/scattered_night.svg';
import { ReactComponent as Broken_day } from './icons/broken_day.svg';
import { ReactComponent as Broken_night } from './icons/broken_night.svg';
import { ReactComponent as Snower_day } from './icons/snower_day.svg';
import { ReactComponent as Snower_night } from './icons/snower_night.svg';
import { ReactComponent as Rain_day } from './icons/rain_day.svg';
import { ReactComponent as Rain_night } from './icons/rain_night.svg';
import { ReactComponent as Thunder_day } from './icons/thunder_day.svg';
import { ReactComponent as Thunder_night } from './icons/thunder_night.svg';
import { ReactComponent as Snow_day } from './icons/snow_day.svg';
import { ReactComponent as Snow_night } from './icons/snow_night.svg';
import { ReactComponent as Mist_day } from './icons/mist_day.svg';
import { ReactComponent as Mist_night } from './icons/mist_night.svg';
import { ReactComponent as Location } from './icons/location.svg';

export type ICONS_TYPES = {
  [key: string]: ReactNode;
}

const ICONS: ICONS_TYPES = {
  '01d': <Clear_day />,
  '01n': <Clear_night />,
  '02d': <Few_clouds_day />,
  '02n': <Few_clouds_night />,
  '03d': <Scattered_day />,
  '03n': <Scattered_night />,
  '04d': <Broken_day />,
  '04n': <Broken_night />,
  '09d': <Snower_day />,
  '09n': <Snower_night />,
  '10d': <Rain_day />,
  '10n': <Rain_night />,
  '11d': <Thunder_day />,
  '11n': <Thunder_night />,
  '13d': <Snow_day />,
  '13n': <Snow_night />,
  '50d': <Mist_day />,
  '50n': <Mist_night />,
  location: <Location />,
};

export type ComponentType = {
  name: string | undefined;
}


const Icons: React.FC<ComponentType> = ({name}) => {
  return (
    <> { name ? ICONS[name] : ICONS.location }</>
  );
}

export default Icons;

