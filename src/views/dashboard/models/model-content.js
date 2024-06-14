export default (data) => (`
  <div class="modal-body">
    <div class="card m-3 p-3 shadow" style="width: 20rem;">
      <img src="${data.image}" alt="image of event">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <p class="card-text">${data.category}</p>
      </div>
    </div>
  </div>
`);
