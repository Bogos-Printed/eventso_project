import viewNav from '../views/nav';
import viewSU from '../views/signup';

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
        ${viewSU()}
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default SignIn;
