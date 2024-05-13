import Router from './router';
import Home from './controllers/homepage';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  }
];

new Router(routes);
