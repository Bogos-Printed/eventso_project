import viewNav from '../views/nav';
// import dashbtn from '../views/dashboard/dashboard-button';

import viewParticipant from '../views/dashboard/participants/participant-map';
import AllParticipants from '../views/event-participants';

import dashboardEvents from '../views/dashboard/events/dashboard-list';

import requestList from '../views/dashboard/request-list';

const EventParticipants = class {
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
    const participants = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/participants/${editId}`));
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
    </div>
    <div class="p-4 d-flex flex-column">
      ${AllParticipants(viewParticipant(participants))}
    </div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default EventParticipants;
