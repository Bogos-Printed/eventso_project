import axios from 'axios';

const checkJoined = async (userId) => {
  const url = `http://localhost:${process.env.BACKEND_PORT}/joined/${await userId}`;
  try {
    const response = await axios.get(url);
    const list = response.data;
    list.forEach((elem) => {
      const id = elem.event_id;
      const joinButton = document.querySelector(`#join-${id}`);
      const resignButton = document.querySelector(`#resign-${id}`);
      joinButton.classList.add('d-none');
      resignButton.classList.remove('d-none');
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default checkJoined;
