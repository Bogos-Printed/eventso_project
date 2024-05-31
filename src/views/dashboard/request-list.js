import axios from 'axios';

const request = async (link, id) => {
  const url = id ? `${link}/${id}` : `${link}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    // console.log(reponse.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default request;
