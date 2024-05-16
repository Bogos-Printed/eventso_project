export default () => (`
  <button type="button" class="btn btn-success me-2"  data-bs-toggle="modal" data-bs-target="#modal">Create an event</button>
<div class="btn-group">
  <a href="/dashboard" class="btn btn-primary active" aria-current="page">Created</a>
  <a href="/dashboard" class="btn btn-primary">Joined</a>
  <a href="/dashboard" class="btn btn-primary">Settings</a>
</div>

<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="createEventModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="createEventModal">Create an event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form>

          <div class="input mb-3">
            <label for="files" class="btn">Select an Image</label>
            <input type="file" class="form-control" id="input">
          </div>

          <div class="mb-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="inputTitle">
          </div>

          <div class="mb-3">
            <label for="inputDescription" class="form-label">Description</label>
            <input type="text" class="form-control" id="inputDescription">
          </div>

          <div class="mb-3">
            <label for="inputLocation" class="form-label">Location</label>
            <input type="text" class="form-control" id="inputLocation">
          </div>

          <div class="d-flex flex-wrap">
            <div class="mb-3">
              <label for="inputDate" class="form-label">Date</label>
              <input type="date" class="form-control" id="inputDate">
            </div>

            <div class="mb-3">
              <label for="inputTime" class="form-label">Time</label>
              <input type="time" class="form-control" id="inputTime">
            </div>
          </div>

        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success">Create</button>
      </div>
    </div>
  </div>
</div>
`);
