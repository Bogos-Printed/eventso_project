export default () => (`
  <p>Sign in or something</p>

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
  <button type="submit" class="btn btn-primary">Submit</button>
  <p>Don't have an account ? <a href="/sign-up">Give us your soul now</a></p>
`);
