import axios from 'axios';

const events = async () => {
  const url = `http://localhost:${process.env.BACKEND_PORT}/events`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default events;
