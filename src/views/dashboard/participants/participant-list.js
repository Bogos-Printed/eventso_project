import axios from 'axios';

const participants = async (id) => {
  const url = `http://localhost/participants/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default participants;
