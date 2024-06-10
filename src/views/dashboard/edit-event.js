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
  console.log(formData);

  const url = `http://127.0.0.1:80/event/${id}`;
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
    console.log('sent');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default editEvent;
