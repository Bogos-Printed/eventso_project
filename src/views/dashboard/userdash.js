import participantModal from './participant-modal';
import editModal from './edit-modal';

export default () => (`
  <div class="card m-3 p-3 shadow" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://images.nightcafe.studio/jobs/nV7F2yKY02wbuQvbW7ch/nV7F2yKY02wbuQvbW7ch--2--etbl8.jpg?tr=w-1600,c-at_max" class="img-fluid rounded" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Painting the gods</h5>
          <p class="card-text">Come join us on our activity of painting our gods. Prolong the respect of the old code and the worship of the mighty beyonder</p>
          <p class="card-text"><small class="text-body-secondary">14:00⏰ 29/07/2024📅</small></p>
        </div>
      </div>
      <div class="p-2 d-flex justify-content-between">
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</a>
        <a data-bs-toggle="modal" data-bs-target="#participant-modal" class="btn btn-warning">Participants</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>

  ${participantModal()}
  ${editModal()}
`);
