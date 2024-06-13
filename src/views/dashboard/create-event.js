import axios from 'axios';

const createEvent = async (formData) => {
  const {
    image,
    title,
    description,
    category,
    location,
    date
  } = formData;

  const url = `http://127.0.0.1:${process.env.BACKEND_PORT}/event/add`;
  try {
    const response = await axios.post(url, {
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
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default createEvent;
