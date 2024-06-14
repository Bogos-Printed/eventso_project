export default () => (`
  <div class="btn-group">
    <a href="/create-event">
      <button type="button" class="btn btn-success me-2">Create an event</button>
    </a>
    <a href="/dashboard" class="btn btn-primary active" id="created-tab" aria-current="page">Created</a>
    <a href="/joined" class="btn btn-primary" id='joined-tab'>Joined</a>
    <a href="/settings" class="btn btn-primary">Settings</a>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
    </button>
  </div>
`);
