import React, { useEffect, useState } from 'react';

import getTemperatureController from '../entities/controllers/getTemperatureController';
import type { TemperatureResponseType } from './types/temperatureResponseType';

export function useTemperatureHook(
  lat: number,
  lon: number,
  params?: { units: string }
): Array<TemperatureResponseType> {
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    getTemperatureController(lat, lon, params).then(temperature =>
      setTemperature(temperature)
    );
  }, []);

  return temperature;
}
