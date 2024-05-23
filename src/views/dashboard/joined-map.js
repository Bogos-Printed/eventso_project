import viewJoined from './event-joined';

export default (events) => (`
  ${events.map((data) => viewJoined(data)).join('')}
`);
