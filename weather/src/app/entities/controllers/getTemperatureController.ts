import getDataFromApi from '../../services/getDataFromApi';
import { CONSTANTS } from './controllers.constants';

const getTemperatureController = async (
  lat: number,
  lon: number,
  params?: { units: string }
) => {
  const uri = `${CONSTANTS.WEATHER_URI}?lat=${lat}&lon=${lon}&cnt=${CONSTANTS.FORECAST_DAYS_QUANTITY}&appid=${process.env.REACT_APP_WEATHER_APP_ID}&${params}`;

  const method = 'GET';

  const response = await getDataFromApi(uri, method, params).then(data => {
    return data;
  });

  // return different days forecast for 3 days
  const forecast = response.list.filter((item: any, index: number) => {
    return index % 5 === 0;
  });

  return Promise.resolve(forecast);
};

export default getTemperatureController;
