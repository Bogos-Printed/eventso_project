import Cookies from 'js-cookie';

import viewNav from '../views/nav';

import dashboardEvents from '../views/dashboard/events/dashboard-list';

import createEvent from '../views/dashboard/create-event';
import createFrom from '../views/create-form';

import checkUser from '../views/check-user';

const CreateForm = class {
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
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${createFrom()}
    </div>
    

    `;
  }

  async formGrab() {
    const form = document.querySelector('#createEvent');
    const idUser = await this.getUserId();
    const input = ['userId', 'image', 'title', 'description', 'category', 'location', 'date'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const fields = {};

      input.forEach((elem) => {
        fields[elem] = formData.get(elem);
      });

      fields.userId = idUser;

      if (fields.image === '') {
        fields.image = 'https://t4.ftcdn.net/jpg/02/51/00/15/360_F_251001540_P8oe2YQ5v5dhZnrN5SFwXgLS0NMZXyNn.jpg';
      }

      createEvent(fields);
      window.setTimeout(() => {
        window.location.href = '/dashboard';
      }, 500);
    });
  }

  async getUserId() {
    const usertoken = Cookies.get('EventsoToken');
    try {
      const isUser = await checkUser(usertoken);
      return isUser.id;
    } catch (error) {
      throw new Error('Error checking user:', error);
    }
  }

  async run() {
    this.el.innerHTML = await this.render();
    this.formGrab();
  }
};

export default CreateForm;
