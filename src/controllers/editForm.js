import viewNav from '../views/nav';
// import dashbtn from '../views/dashboard/dashboard-button';

import editForm from '../views/edit-form';
import updateEvent from '../views/dashboard/edit-event';

import dashboardEvents from '../views/dashboard/events/dashboard-list';

import requestList from '../views/dashboard/request-list';

const EditForm = class {
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
    const urlId = new URLSearchParams(window.location.search);
    const editId = urlId.get('id');
    const editEvent = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/event/${editId}`));
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
    </div>
    <div class="p-4">
      ${editForm(editEvent)}
    </div>
    `;
  }

  formGrab() { // grabs form data
    const form = document.querySelector('#editEvent');
    const hurb = ['image', 'title', 'description', 'category', 'location', 'date'];
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const fields = {};

        hurb.forEach((elem) => {
          fields[elem] = formData.get(elem);
        });
        updateEvent(fields, 12); // field + event.id
        window.location.href = '/dashboard'; // sends to dashboard
      });
    }
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.formGrab();
  }
};

export default EditForm;
