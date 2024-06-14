import Cookies from 'js-cookie';

import viewNav from '../views/nav';

import createEvent from '../views/dashboard/create-event';
import createFrom from '../views/create-form';

import checkUser from '../views/account/check-user';
import logOut from '../views/account/disconnect';
import isLoggedIn from '../views/account/is-loggedIn';

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
    return `  
    <div class="container">
        <div class="col-12">
          ${viewNav()}
        </div>
        ${createFrom()}
    </div>
    

    `;
  }

  // retreives data from form and send it to createEvents
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

      // adds a default image
      if (fields.image === '') {
        fields.image = 'https://t4.ftcdn.net/jpg/02/51/00/15/360_F_251001540_P8oe2YQ5v5dhZnrN5SFwXgLS0NMZXyNn.jpg';
      }

      // creates event with form data
      createEvent(fields);
      window.setTimeout(() => {
        window.location.href = '/dashboard';
      }, 500);
    });
  }

  // retreive user id
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
    isLoggedIn();
    this.formGrab();
    logOut();
  }
};

export default CreateForm;
