import Router from './Router';
import Home from './controllers/homepage';
import SignIn from './controllers/signIn';
import SignUp from './controllers/singUp';
import Dashboard from './controllers/dashboard';
import './index.scss';
import Settings from './controllers/settings';
import Joined from './controllers/joined';

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
  },
  {
    url: '/dashboard',
    controller: Dashboard
  },
  {
    url: '/joined',
    controller: Joined
  },
  {
    url: '/settings',
    controller: Settings
  }
];

new Router(routes);
