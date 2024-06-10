import viewNav from '../views/nav';

import dashboardEvents from '../views/dashboard/events/dashboard-list';

import createEvent from '../views/dashboard/create-event';
import createFrom from '../views/create-form';

const CreateForm = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataGet(data) {
    try {
      const lists = await data;
      return lists;
    } catch (error) {
      throw new Error(error);
    }
  }

  async render() {
    this.events = await this.dataGet(dashboardEvents()); // data of all events
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${createFrom()}
    </div>
    

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
      window.location.href = '/dashboard';
    });
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.formGrab();
  }
};

export default CreateForm;
