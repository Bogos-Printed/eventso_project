import Error404 from './controllers/404';

const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;

    this.routes = routes;

    this.run();
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        const Controller = route.controller;

        new Controller(this.run);
        ifExist = true;

        break;
      }
    }

    if (!ifExist) {
      new Error404();
    }
  }

  run() {
    this.startController();
  }
};

export default Router;
