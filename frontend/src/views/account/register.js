export default () => (`
  <form id="createUser">

    <div class="mb-3">
      <label for="inputImg" class="form-label">Username</label>
      <input type="text" class="form-control" id="inputUsername" name="username">
    </div>

    <div class="mb-3">
      <label for="inputFirstname" class="form-label">Firstname</label>
      <input type="text" class="form-control" id="inputFirstname" name="firstname">
    </div>

    <div class="mb-3">
      <label for="inputLastname" class="form-label">Lastname</label>
      <input type="text" class="form-control" id="inputLastname" name="lastname"></input>
    </div>

    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="text" class="form-control" id="inputEmail" name="email">
    </div>

    <div class="mb-3">
      <label for="inputPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputDate" name="password">
    </div>

    <div class="mb-3">
      <label for="inputPasswordConfirm" class="form-label">Confirm Password</label>
      <input type="password" class="form-control" id="inputPasswordConfirm" name="password-confirm">
    </div>

    <div>
      <button type="submit" class="btn btn-primary" id="registerConfirm">Submit</button>
      <p>Already have an account ? click <a href="/log-in">here</a></p>
    </div>
  </form>
`);
