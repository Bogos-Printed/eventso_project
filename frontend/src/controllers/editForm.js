import viewNav from '../views/nav';

import editForm from '../views/edit-form';
import updateEvent from '../views/dashboard/edit-event';

import requestList from '../views/dashboard/request-list';
import logOut from '../views/account/disconnect';
import isLoggedIn from '../views/account/is-loggedIn';

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
    const editId = this.getEventId();
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
    const eventId = this.getEventId();
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const fields = {};

        hurb.forEach((elem) => {
          fields[elem] = formData.get(elem);
        });
        updateEvent(fields, eventId); // field + event.id

        // ensure that the data is sent before redirection
        window.setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
      });
    }
  }

  getEventId() {
    const urlId = new URLSearchParams(window.location.search);
    const editId = urlId.get('id');

    return editId;
  }

  async run() {
    this.el.innerHTML = await this.render();
    isLoggedIn();
    this.formGrab();
    logOut();
  }
};

export default EditForm;
