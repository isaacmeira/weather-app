import getDataFromApi from '../../services/getDataFromApi';
import { CONSTANTS } from './controllers.constants';

const getCityController = async (
  lat: number,
  lon: number,
  params?: { units: string }
) => {
  const uri = `${CONSTANTS.OPEN_CAGE_URI}?q=${lat},${lon}&pretty=1&key=${process.env.REACT_APP_OPEN_CAGE_KEY}`;

  const method = 'GET';

  const response = await getDataFromApi(uri, method, params).then(data => {
    return data;
  });

  // eslint-disable-next-line no-console
  console.log(response);

  return Promise.resolve(response);
};

export default getCityController;
