import formModal from './form-modal';

export default () => (`
  <button type="button" class="btn btn-success me-2"  data-bs-toggle="modal" data-bs-target="#form-modal">Create an event</button>
  <div class="btn-group">
    <a href="/dashboard" class="btn btn-primary active" aria-current="page">Created</a>
    <a href="/dashboard" class="btn btn-primary">Joined</a>
    <a href="/dashboard" class="btn btn-primary">Settings</a>
  </div>

  ${formModal()}
`);