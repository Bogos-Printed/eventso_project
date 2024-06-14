export default () => (`
  <p>Account settings</p>

  <div class="mb-3 row">
    <label for="inputFirstName" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="username" class="form-control" id="inputUsername" value="buh">
    </div>
  </div> 
  <div class="mb-3 row">
    <label for="inputFirstName" class="col-sm-2 col-form-label">FirstName</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="inputEmail" value="james">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputLastName" class="col-sm-2 col-form-label">LastName</label>
    <div class="col-sm-10">
      <input type="lastname" class="form-control" id="inputEmail" value="bruh">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" value="generic@mail.com">
    </div>
  </div>
</div>
  <button type="submit" class="btn btn-primary">Save</button>
`);
