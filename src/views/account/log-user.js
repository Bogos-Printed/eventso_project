import axios from 'axios';
import Cookies from 'js-cookie';

const logUser = async (formData) => {
  const {
    email,
    password
  } = formData;

  const url = `http://127.0.0.1:${process.env.BACKEND_PORT}/auth`;
  try {
    const response = await axios.post(url, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    Cookies.set('EventsoToken', response.data.PHP_SESSID, { expires: 7 });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default logUser;
