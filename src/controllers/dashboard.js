import dashbtn from '../views/dashboard/events/dashboard-button';
import viewNav from '../views/nav';
import viewDashboard from '../views/dashboard/events/dashboard-map';
import dashboardEvents from '../views/dashboard/events/dashboard-list';
import createEvent from '../views/dashboard/create-event';
import formModal from '../views/dashboard/modal/form-modal';

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataFetch() {
    try {
      const events = await dashboardEvents();
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
    ${formModal()}
    
    `;
  }

  formGrab() {
    const form = document.querySelector('#createEvent');
    const bruh = ['image', 'title', 'description', 'category', 'location', 'date'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const fields = {};

      bruh.forEach((elem) => {
        fields[elem] = formData.get(elem);
      });

      createEvent(fields);
    });
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.formGrab();
  }
};

export default Dashboard;
