import axios from 'axios';
import createGroup from '../create-group';

const createEvent = async (formData) => {
  const {
    userId,
    image,
    title,
    description,
    category,
    location,
    date
  } = formData;

  const url = `http://localhost:${process.env.BACKEND_PORT}/event/add/`;
  try {
    const response = await axios.post(url, {
      userId,
      image,
      title,
      description,
      location,
      date,
      category
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    createGroup(response.data.id);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default createEvent;
