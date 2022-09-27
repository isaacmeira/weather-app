import React, { useMemo } from 'react';

import type { TemperatureType } from './types';
import cn from 'classnames';

import './styles.scss'
import Typography from '../../../../shared/Typography ';
import convertDate from '../../../../helpers/convertDate';
import Icons from '../../../../assets/icon';


const Temperature: React.FC<TemperatureType> = ({ index, variant, info, temperature }) => {

  const memoizedFullData = useMemo(() => (
    <div className="text__container">
      <Typography variant='bold' size={30} content={convertDate(info?.dt_txt)} />
      <Typography size={25} content={`${info?.main.temp} °C`} />

      <Typography variant='bold' margin={{top: 30, bottom: 30}} size={35} content={info?.weather[0].description} />

      <Typography  size={25} content={`Vento: ${info?.wind.speed} Km/h`} />
      <Typography  size={25} content={`Umidade: ${info?.main.humidity} %`} />
      <Typography  size={25} content={`Pressão: ${info?.main.pressure} hPA`} />
      
  </div>
  ),[])

  const memoizedHalfData = useMemo(() => (
    <div className="text__container">
      <Typography variant='bold' size={30} content={convertDate(info?.dt_txt)} />
      <Typography size={25} content={`${info?.main.temp} °C`} />
    </div>
  ),[]);

  const MemoizedSvg = <Icons name={info?.weather[0].icon} />; 

  return (
    <div className={cn('temperature', `temperature--${variant}`)}>
      <div className={cn('info', `info--${temperature}--${index}`)}>
        <div className={cn('info__icon', `info__icon--${variant}`)}>
          {MemoizedSvg}
        </div>
        <div className='info__data'>
            { variant === 'full' ? (
             memoizedFullData 
            ) : (
              memoizedHalfData
            ) }
          </div>
      </div>
    </div>
  );
}

export default Temperature;