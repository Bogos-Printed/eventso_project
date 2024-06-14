export default () => (`
  <p>Sign in or something</p>

  <form id="logUser">

    <div class="mb-3 row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail" name="email">
    </div>

    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword" name="password">
    </div>

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

  </form>

  <p>Don't have an account ? <a href="/register">Give us your soul now</a></p>
`);
