import Router from './Router';
import Home from './controllers/homepage';
import SignIn from './controllers/signIn';
import SignUp from './controllers/singUp';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/sign-in',
    controller: SignIn
  },
  {
    url: '/sign-up',
    controller: SignUp
  }
];

new Router(routes);
