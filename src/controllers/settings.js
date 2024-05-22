import viewSettings from '../views/account/setting-user';
import viewNav from '../views/nav';

const Settings = class {
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
        <div>
          ${viewSettings()}
        </div>
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Settings;
