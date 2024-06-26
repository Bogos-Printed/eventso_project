import axios from 'axios';

const editEvent = async (formData, id) => {
  const {
    image,
    title,
    description,
    category,
    location,
    date
  } = formData;

  const url = `http://localhost:${process.env.BACKEND_PORT}/event/${id}`;
  try {
    const response = await axios.put(url, {
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

export default editEvent;
