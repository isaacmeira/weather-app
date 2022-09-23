import React, { useEffect, useState, useMemo } from 'react';
import  getBackgroundController  from '../../entities/controllers/getBackgroundController';
import Container from '../../shared/Container/Container';

import './styles.scss'

const Main: React.FC = () => {

  const [backGround, setBackground] = useState<string>('');

  useEffect(() => {
    getBackgroundController().then(background => setBackground(background))
  }, [backGround]) 

  return (<Container background={{url: backGround, filter: 'darker'}} />)
}

export default Main;