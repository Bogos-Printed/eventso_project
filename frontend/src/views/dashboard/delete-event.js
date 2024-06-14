import axios from 'axios';

const deleteRequest = async (link, id) => {
  const url = id ? `${link}/${id}` : `${link}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteRequest;
