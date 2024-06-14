import Cookies from 'js-cookie';

const logOut = () => {
  const disconnectButton = document.querySelector('#disconnect');
  disconnectButton.addEventListener('click', (e) => {
    e.preventDefault();
    Cookies.remove('EventsoToken');
    window.setTimeout(() => {
      window.location.href = '/';
    }, 500);
  });
};

export default logOut;
