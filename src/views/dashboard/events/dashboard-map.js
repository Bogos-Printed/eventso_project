import viewEvent from '../userdash';

export default (events) => (`
  ${events.map((data) => viewEvent(data)).join('')}
`);
