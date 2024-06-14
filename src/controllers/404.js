import logOut from '../views/account/disconnect';
import isLoggedIn from '../views/is-loggedIn';
import viewNav from '../views/nav';

const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
    <div class="container">
      <div class="col-12">
        ${viewNav()}
      </div>
      <div>
        <h1>404</h1>
      </div>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    isLoggedIn();
    logOut();
  }
};

export default Error404;
