import Router from './Router';
import Home from './controllers/homepage';
import LogIn from './controllers/logIn';
import Register from './controllers/register';
import Dashboard from './controllers/dashboard';
import './index.scss';
import Settings from './controllers/settings';
import Joined from './controllers/joined';
import EditForm from './controllers/editForm';
import CreateForm from './controllers/createForm';
import EventParticipants from './controllers/participants';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/log-in',
    controller: LogIn
  },
  {
    url: '/register',
    controller: Register
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
  },
  {
    url: '/edit-event',
    controller: EditForm
  },
  {
    url: '/create-event',
    controller: CreateForm
  },
  {
    url: '/event-participants',
    controller: EventParticipants
  }
];

new Router(routes);
