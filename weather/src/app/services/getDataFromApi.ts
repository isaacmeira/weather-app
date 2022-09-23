import axios from 'axios';

const getDataFromApi = async (url: string, method: string) => {
  const response = await axios({
    method,
    url,
  });

  return response.data;
};

export default getDataFromApi;
