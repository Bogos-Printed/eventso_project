import axios from 'axios';

const createGroup = async (eventId) => {
  const url = `http://localhost:${process.env.BACKEND_PORT}/group/${eventId}`;
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default createGroup;
