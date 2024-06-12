import viewNav from '../views/nav';
import viewLogIn from '../views/account/log-in';
import logUser from '../views/account/log-user';

const LogIn = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${viewLogIn()}
    </div>
    `;
  }

  formGrab() {
    const form = document.querySelector('#logUser');
    const bruh = ['email', 'password'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const fields = {};

      bruh.forEach((elem) => {
        fields[elem] = formData.get(elem);
      });

      // console.log(fields);
      logUser(fields); // post function
      window.location.href = '/';
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.formGrab();
  }
};

export default LogIn;
