import dashbtn from '../views/dashbtn';
import viewNav from '../views/nav';
import viewDashboard from '../views/userdash';

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
        ${dashbtn()}
        <div class="d-flex flex-wrap">
          ${viewDashboard()}
          ${viewDashboard()}
          ${viewDashboard()}
        </div>
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default SignIn;
