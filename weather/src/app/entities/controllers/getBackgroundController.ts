import getDataFromApi from '../../services/getDataFromApi';
import { CONSTANTS } from './controllers.constants';

const getBackgroundController = async () => {
  const uri = CONSTANTS.BING_URI;
  const method = 'GET';

  const response = await getDataFromApi(uri, method).then(data => {
    return data;
  });

  const url = response.images[0].url;

  return Promise.resolve(`https://www.bing.com${url}`);
};

export default getBackgroundController;