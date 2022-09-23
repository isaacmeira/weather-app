import React from 'react';

import Container from '../../shared/Container/Container';
import { useBackgroundHook } from '../../hooks/useBackground';

import './styles.scss'


const Main: React.FC = () => {

  const background = useBackgroundHook();

  return (<Container background={{url: background, filter: 'darker'}}>
    <h1>teste</h1>
  </Container>)
}

export default Main;