import dashbtn from '../views/dashboard/dashboard-button';
import viewNav from '../views/nav';
import viewJoined from '../views/dashboard/joined/eventJoined-map';
import joinedList from '../views/dashboard/joined/eventJoined-list';
import logOut from '../views/account/disconnect';
import isLoggedIn from '../views/account/is-loggedIn';

const Joined = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async dataFetch() {
    try {
      const events = await joinedList();
      return events;
    } catch (error) {
      throw new Error(error);
    }
  }

  async render() {
    const eventsJoined = await this.dataFetch();
    return `
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${dashbtn()}
        <div class="d-flex flex-wrap justify-content-center">
          ${viewJoined(eventsJoined)}
        </div>
    </div>
      
    `;
  }

  joinedNav() {
    const createdTab = document.querySelector('#created-tab');
    const joinedTab = document.querySelector('#joined-tab');
    createdTab.classList.remove('active');
    joinedTab.classList.add('active');
  }

  async run() {
    this.el.innerHTML = await this.render();
    isLoggedIn();
    this.joinedNav();
    logOut();
  }
};

export default Joined;
