import viewParticipant from './participant-content';

export default (participants) => (`
  ${participants.map((data) => viewParticipant(data)).join('')}
`);
