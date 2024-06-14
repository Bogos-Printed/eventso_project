import viewNav from '../views/nav';

import viewParticipant from '../views/dashboard/participants/participant-map';
import AllParticipants from '../views/event-participants';

import requestList from '../views/dashboard/request-list';
import logOut from '../views/account/disconnect';
import isLoggedIn from '../views/is-loggedIn';

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
    // this.events = await this.dataGet(dashboardEvents()); // data of all events
    const urlId = new URLSearchParams(window.location.search);
    const editId = urlId.get('id');
    const participantsList = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/participants/${editId}`));
    const participants = this.hasParticipants(participantsList);
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
    </div>
    <div class="p-4 d-flex flex-column">
      ${AllParticipants(participants)}
    </div>
    `;
  }

  hasParticipants(data) {
    const empty = [{
      group_id: ' ',
      user_id: ' ',
      firstname: 'No',
      lastname: 'Participants',
      email: 'at the moment'
    }];

    let result;
    if (data.length !== undefined) {
      result = viewParticipant(data);
    } else {
      result = viewParticipant(empty);
    }
    return result;
  }

  async run() {
    this.el.innerHTML = await this.render();
    isLoggedIn();
    logOut();
  }
};

export default EventParticipants;
