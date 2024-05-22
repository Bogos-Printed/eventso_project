import viewEvent from './dashboard/userdash';

export default (events) => (`
  ${events.map((data) => viewEvent(data)).join('')}
`);
