import dashbtn from '../views/dashboard/dashbtn';
import viewNav from '../views/nav';
import viewJoined from '../views/dashboard/event-joined';

const Joined = class {
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
        <div class="d-flex flex-wrap justify-content-center">
          ${viewJoined()}
          ${viewJoined()}
          ${viewJoined()}
        </div>
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Joined;
