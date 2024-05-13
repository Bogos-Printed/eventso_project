import Nav from '../views/nav';

const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${Nav()}
      <div>
        <h1>404</h1>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
