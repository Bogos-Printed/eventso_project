export default (event) => (`
  <div class="card m-3 p-3 shadow" style="max-width: 540px;" id="card-${event.id}">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${event.image}" class="img-fluid rounded" alt="image of event">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.description}</p>
          <p class="card-text"><small class="text-body-secondary">${event.date}</small></p>
        </div>
      </div>
      <div class="p-2 d-flex justify-content-between">
        <a data-bs-target="#edit-modal" data-bs-target="#edit-modal" class="btn btn-primary" data-bs-toggle="modal" id="edit-${event.id}">Edit</a>
        <a data-bs-toggle="modal" data-bs-target="#participant-modal" class="btn btn-warning" id="participant-${event.id}">Participants</a>
        <a href="#" class="btn btn-danger remover" id="delete-${event.id}">Delete</a>
      </div>
    </div>
  </div>
`);
