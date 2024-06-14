export default () => (`
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item" id='logIn-button'>
          <a class="nav-link" href="/log-in">Log in</a>
        </li>
        <div class="dropdown d-none" id='user-menu'>
          <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-user-large"></i>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
            <li><a class="dropdown-item" href="/settings">Settings</a></li>
            <li><a class="dropdown-item" href="/" id="disconnect">Disconnect</a></li>
          </ul>
        </div>
      </ul>

    </div>
  </nav>
`);
