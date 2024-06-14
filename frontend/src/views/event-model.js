export default (data) => (`
  <div class="card m-3 p-3 shadow" style="width: 20rem;">
    <img src="${data.image}" alt="image of event">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.description}</p>
      <p>${data.date}<p>
      <div class="d-flex flex-wrap">
      <a href="#" class="btn btn-primary align-self-center">Participate</a>
      <p class="m-2 ps-4"> 150 places left</p></div>
    </div>
  </div>
`);
