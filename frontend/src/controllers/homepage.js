import Cookies from 'js-cookie';
import viewNav from '../views/nav';
import viewEvents from '../views/events-map';
import requestList from '../views/dashboard/request-list';
import logOut from '../views/account/disconnect';
import createGroup from '../views/create-group';
import checkJoined from '../views/check-joined';
import checkUser from '../views/account/check-user';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataGet(data) {
    try {
      const events = await data;
      return events;
    } catch (error) {
      throw new Error(error);
    }
  }

  async render() {
    this.events = await this.dataGet(requestList(`http://localhost:${process.env.BACKEND_PORT}/events`)); // data of all events
    return `
      <header class="container">
          ${viewNav()}
      </header>

      <main>
        <div class="container d-flex flex-wrap justify-content-between mb-4 mt-3">
          <form class="d-flex w-50" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>

          <div class="btn-group bob">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
              Relevance
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Relevance</a></li>
              <li><a class="dropdown-item" href="#">A to Z</a></li>
              <li><a class="dropdown-item" href="#">Z to A</a></li>
              <li><a class="dropdown-item" href="#">Most participants</a></li>
              <li><a class="dropdown-item" href="#">Least participants</a></li>
            </ul>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          ${viewEvents(this.events)}
        </div>
      </main>
    `;
  }

  ParticipateEvent(events) {
    events.forEach((event) => {
      const joinButtonId = document.querySelector(`#join-${event.id}`);
      // const eventId = event.id;
      if (joinButtonId) {
        joinButtonId.addEventListener('click', async (e) => {
          e.preventDefault();
          // createGroup(eventId);
        });
      }
    });
  }

  async isJoined() {
    const usertoken = Cookies.get('EventsoToken');
    const isUser = await checkUser(usertoken);
    const userId = isUser.id;
    return userId;
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.ParticipateEvent(this.events);
    logOut();
    checkJoined(this.isJoined());
  }
};

export default Home;
