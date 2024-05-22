import dashbtn from '../views/dashboard/dashbtn';
import viewNav from '../views/nav';
import viewDashboard from '../views/userdash-map';
import dashList from '../views/userdash-list';

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataFetch() {
    try {
      const events = await dashList();
      return events;
    } catch (error) {
      throw new Error(error);
    }
  }

  async render() {
    const events = await this.dataFetch();
    return `
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${dashbtn()}
        <div class="d-flex flex-wrap justify-content-center">
          ${viewDashboard(events)}
        </div>
    </div>
      
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
