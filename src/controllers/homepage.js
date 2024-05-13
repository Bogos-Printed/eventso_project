import viewNav from '../views/nav';
import viewHome from '../views/home';
import viewEvents from '../views/events';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${viewHome()}

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

        <div class="row">  
          ${viewEvents()}
          ${viewEvents()}
          ${viewEvents()}
          ${viewEvents()}
          ${viewEvents()}
          ${viewEvents()}
        </div>
    </div>
      
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
