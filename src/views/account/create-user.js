import axios from 'axios';

const createEvent = async (formData) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password
  } = formData;
  console.log(formData);

  const url = 'http://127.0.0.1:80/register';
  try {
    const response = await axios.post(url, {
      username,
      firstname,
      lastname,
      email,
      password
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
