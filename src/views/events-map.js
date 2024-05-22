import viewEvent from './event-model';

export default (events) => (`
  ${events.map((data) => viewEvent(data)).join('')}
`);
