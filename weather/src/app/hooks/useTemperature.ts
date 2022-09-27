import React, { useEffect, useState } from 'react';

import getTemperatureController from '../entities/controllers/getTemperatureController';

export function useTemperatureHook(
  lat: number,
  lon: number,
  params?: { units: string }
): unknown {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    getTemperatureController(lat, lon, params).then(temperature =>
      setTemperature(temperature)
    );
  }, []);

  return temperature;
}
