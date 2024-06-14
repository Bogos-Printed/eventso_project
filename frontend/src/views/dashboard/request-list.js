import axios from 'axios';

const request = async (link, id) => {
  const url = id ? `${link}/${id}` : `${link}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default request;
