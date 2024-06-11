import viewNav from '../views/nav';
import viewRegister from '../views/account/register';
import createUser from '../views/account/create-user';

const Register = class {
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
        ${viewRegister()}
    </div>
    `;
  }

  formGrab() {
    const form = document.querySelector('#createUser');
    const bruh = ['username', 'firstname', 'lastname', 'email', 'password'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const fields = {};

      bruh.forEach((elem) => {
        fields[elem] = formData.get(elem);
      });
      createUser(fields);
      window.location.href = '/';
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.formGrab();
  }
};

export default Register;
