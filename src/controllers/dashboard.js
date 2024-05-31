import viewNav from '../views/nav';
import dashbtn from '../views/dashboard/dashboard-button';

import viewDashboard from '../views/dashboard/events/dashboard-map';
import dashboardEvents from '../views/dashboard/events/dashboard-list';

import createEvent from '../views/dashboard/create-event';
import formModal from '../views/dashboard/modal/form-modal';

import dashboardParticipant from '../views/dashboard/participants/participant-list';
import viewParticipant from '../views/dashboard/participants/participant-map';
import participantModal from '../views/dashboard/modal/participant-modal';

import editInfos from '../views/dashboard/edit/edit-list';
import editModal from '../views/dashboard/modal/edit-modal';

import requestList from '../views/dashboard/request-list';

const Dashboard = class {
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
    const events = await this.dataGet(dashboardEvents());
    const participants = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/participants`, 2));
    const editEvent = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/event`, 12));
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
    ${participantModal(viewParticipant(participants))}
    ${editModal(editEvent)}
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
