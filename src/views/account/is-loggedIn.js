import Cookies from 'js-cookie';

const isLoggedIn = () => {
  const cookie = Cookies.get('EventsoToken');
  if (cookie == null) {
    window.setTimeout(() => {
      window.location.href = '/log-in';
    }, 500);
  } else {
    const logInButton = document.querySelector('#logIn-button');
    const userMenu = document.querySelector('#user-menu');
    logInButton.classList.add('d-none');
    userMenu.classList.remove('d-none');
  }
};

export default isLoggedIn;
