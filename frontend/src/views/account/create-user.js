import axios from 'axios';

const createUser = async (formData) => {
  const {
    username,
    firstname,
    lastname,
    email,
    password
  } = formData;

  const url = `http://localhost:${process.env.BACKEND_PORT}/register`;
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

export default createUser;
