export default (data) => (`
  <div class="card m-3 p-3 shadow" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${data.image}" class="img-fluid rounded" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
          <p class="card-text"><small class="text-body-secondary">${data.date}</small></p>
        </div>
      </div>
      <div class="p-2 d-flex justify-content-between">
        <a href="#" class="btn btn-danger">Resign</a>
      </div>
    </div>
  </div>
`);
