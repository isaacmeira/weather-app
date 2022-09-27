import axios from 'axios';

const getDataFromApi = async (url: string, method: string, params: unknown) => {
  const response = await axios({
    method,
    url,
    params,
  });

  return response.data;
};

export default getDataFromApi;
