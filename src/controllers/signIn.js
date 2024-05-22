import viewNav from '../views/nav';
import viewSI from '../views/account/signin';

const SignIn = class {
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
        ${viewSI()}
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default SignIn;
