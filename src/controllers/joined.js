import dashbtn from '../views/dashboard/dashbtn';
import viewNav from '../views/nav';
import viewJoined from '../views/dashboard/joined-map';
import joinedList from '../views/dashboard/joined-list';

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

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Joined;