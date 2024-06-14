import viewNav from '../views/nav';
// import viewHome from '../views/home';
import viewEvents from '../views/events-map';
import eventList from '../views/event-list';
import isLoggedIn from '../views/is-loggedIn';
import logOut from '../views/disconnect';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataFetch() {
    try {
      const events = await eventList();
      return events;
    } catch (error) {
      throw new Error(error);
    }
  }

  async render() {
    const events = await this.dataFetch();
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
          ${viewEvents(events)}
        </div>
      </main>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    isLoggedIn();
    logOut();
  }
};

export default Home;
