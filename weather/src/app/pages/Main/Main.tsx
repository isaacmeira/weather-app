import React from 'react';

import Container from '../../shared/Container';
import { useBackgroundHook } from '../../hooks/useBackground';

import './styles.scss'
import Forecast from '../../features/Forecast';
import type { TemperatureResponseType } from '../../hooks/types/temperatureResponseType';
import { useTemperatureHook } from '../../hooks/useTemperature';


const Main: React.FC = () => {

  const background = useBackgroundHook();
  const forecast: Array<TemperatureResponseType> = useTemperatureHook(1, 2, {units: 'metric'}); 

  return (
  <Container background={{url: background}}>
    <Forecast forecast={forecast} />
  </Container>)
}

export default Main;