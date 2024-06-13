import Cookies from 'js-cookie';

import viewNav from '../views/nav';
import dashbtn from '../views/dashboard/dashboard-button';

import viewDashboard from '../views/dashboard/events/dashboard-map';

import checkUser from '../views/check-user';

import requestList from '../views/dashboard/request-list';

// import deleteEvent from '../views/dashboard/delete-event';

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
    this.user_id = await this.isLoggedIn();
    this.events = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/dashboard/${this.user_id}`)); // data of all events
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${dashbtn()}
        <div class="d-flex flex-wrap justify-content-center">
          ${viewDashboard(this.events)}
        </div>
    </div>
    `;
  }

  // deletion of event
  removeEvent(events) {
    events.forEach((event) => {
      const deleteButtonId = document.querySelector(`#delete-${event.id}`);
      if (deleteButtonId) {
        deleteButtonId.addEventListener('click', (e) => {
          e.preventDefault();
          const card = document.querySelector(`#card-${event.id}`);
          card.remove();
          // deleteEvent(`http://localhost:${process.env.BACKEND_PORT}/event`, event.id);
          // console.log('it is done');
        });
      }
    });
  }

  // handles buttons AKA when clicking button sends to events with id in url
  relevantEvent(events) {
    events.forEach((event) => {
      const participantButtonId = document.querySelector(`#participant-${event.id}`);
      const editButtonId = document.querySelector(`#edit-${event.id}`);
      if (editButtonId) {
        editButtonId.addEventListener('click', async (e) => {
          e.preventDefault();
          const editUrl = `http://localhost:${process.env.FRONTEND_PORT}/edit-event?id=${event.id}`;
          window.location.href = editUrl;
        });
      }
      if (participantButtonId) {
        participantButtonId.addEventListener('click', async (e) => {
          e.preventDefault();
          const eventUrl = `http://localhost:${process.env.FRONTEND_PORT}/event-participants?id=${event.id}`;
          window.location.href = eventUrl;
        });
      }
    });
  }

  // checks if the user is connected and get id of user
  async isLoggedIn() {
    const usertoken = Cookies.get('EventsoToken');
    // -> no ''token'' = sent to log-in
    // if (usertoken === null) {
    //   // window.location.href = 'http://127.0.0.1:9090/log-in';
    //   return; // exit function
    // }
    try {
      const isUser = await checkUser(usertoken);
      return isUser.id;
    } catch (error) {
      throw new Error('Error checking user:', error);
    }
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.removeEvent(this.events);
    this.relevantEvent(this.events);
  }
};

export default Dashboard;
