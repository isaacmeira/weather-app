import React, { useCallback } from 'react';
import type { TemperatureResponseType } from '../../hooks/types/temperatureResponseType';


import { useTemperatureHook } from '../../hooks/useTemperature';
import Input from '../../shared/Input';
import Temperature from './components/Temperature';

import './styles.scss'


const Forecast: React.FC = () => {

  const getTemperatureCondition = useCallback((temperature: number) => {

    const temperatureCondition = temperature < 15 ? 'cold' : 
    temperature > 35 ? 'hot' : 'warm';

    return temperatureCondition;

  }, []);

  const forecast: Array<TemperatureResponseType> = useTemperatureHook(1, 2, {units: 'metric'});

  return (
    <div className="forecast">
      <div className="header">
        <Input className='header__forecast'  />
      </div>
      <div className="body">
          { forecast.map((item, index) => {
            return <Temperature key={index} 
            variant={index === 0 && forecast.length <= 3 ?  'full' : 'half'} info={item}
            temperature={ getTemperatureCondition(item.main.temp) } />
          })}   
      </div>
    </div>
  );
};

export default Forecast;