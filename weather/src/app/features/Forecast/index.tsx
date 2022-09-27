import React from 'react';


import { useTemperatureHook } from '../../hooks/useTemperature';

import './styles.scss'


const Forecast: React.FC = () => {

  const forecast = useTemperatureHook(1, 2, {units: 'metric'});

  return (<h1>Teste</h1>)
}

export default Forecast;