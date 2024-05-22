export default () => (`
  <p>Sign in or something</p>

  <div class="mb-3 row">
    <label for="inputFirstName" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="username" class="form-control" id="inputUsername">
    </div>
  </div> 
  <div class="mb-3 row">
    <label for="inputFirstName" class="col-sm-2 col-form-label">FirstName</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="inputEmail">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputLastName" class="col-sm-2 col-form-label">LastName</label>
    <div class="col-sm-10">
      <input type="lastname" class="form-control" id="inputEmail">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPasswordConfirm">
  </div>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <p>Already have an account ? click <a href="/sign-in">here</a></p>
`);
