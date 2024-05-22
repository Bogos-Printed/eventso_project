import axios from 'axios';

const events = async () => {
  const url = 'http://localhost/events';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default events;
