import React from 'react';

import Container from '../../shared/Container';
import { useBackgroundHook } from '../../hooks/useBackground';

import './styles.scss'
import Forecast from '../../features/Forecast';


const Main: React.FC = () => {

  const background = useBackgroundHook();

  return (
  <Container background={{url: background, filter: 'darker'}}>
    <Forecast />
  </Container>)
}

export default Main;