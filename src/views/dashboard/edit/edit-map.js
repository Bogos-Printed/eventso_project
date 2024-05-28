import viewEdit from '../modal/edit-modal';

export default (event) => (`
  ${event.map((data) => viewEdit(data)).join('')}
`);
