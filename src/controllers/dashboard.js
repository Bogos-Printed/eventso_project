import viewNav from '../views/nav';
import dashbtn from '../views/dashboard/dashboard-button';

import viewDashboard from '../views/dashboard/events/dashboard-map';
import dashboardEvents from '../views/dashboard/events/dashboard-list';

// import requestList from '../views/dashboard/request-list';

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
      // console.log(lists);
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
        ${dashbtn()}
        <div class="d-flex flex-wrap justify-content-center">
          ${viewDashboard(this.events)}
        </div>
    </div>
    `;
  }

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

  relevantEvent(events) {
    events.forEach((event) => {
      const participantButtonId = document.querySelector(`#participant-${event.id}`);
      const editButtonId = document.querySelector(`#edit-${event.id}`);
      if (editButtonId) {
        editButtonId.addEventListener('click', async (e) => {
          e.preventDefault();
          const editUrl = `http://127.0.0.1:${process.env.FRONTEND_PORT}/edit-event?id=${event.id}`;
          window.location.href = editUrl;
        });
      }
      if (participantButtonId) {
        participantButtonId.addEventListener('click', async (e) => {
          e.preventDefault();
          const eventUrl = `http://127.0.0.1:${process.env.FRONTEND_PORT}/event-participants?id=${event.id}`;
          window.location.href = eventUrl;
        });
      }
    });
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.removeEvent(this.events);
    this.relevantEvent(this.events);
  }
};

export default Dashboard;
