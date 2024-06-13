import axios from 'axios';

const events = async (cookie) => {
  const url = `http://localhost:${process.env.BACKEND_PORT}/auth/${cookie}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error, 'User not logged');
  }
};

export default events;
