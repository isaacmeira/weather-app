import React, { useEffect, useState } from 'react';

import getCityController from '../entities/controllers/getCityController';

export function useCityHook(lat: number, lon: number) {
  const [city, setCity] = useState('');

  useEffect(() => {
    getCityController(lat, lon).then(city => setCity(city));
  }, []);

  return city;
}
