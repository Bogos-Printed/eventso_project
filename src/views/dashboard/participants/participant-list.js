import axios from 'axios';

const participants = async (id) => {
  const url = `http://localhost:${process.env.BACKEND_PORT}/participants/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default participants;
