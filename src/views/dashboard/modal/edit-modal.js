export default (data) => {
  const time = data.date;
  const date = time.replace(' ', 'T');
  return `
  <div class="modal fade" id="edit-modal" tabindex="-1" aria-labelledby="editEventModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editEventModal">Edit your event</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form id="editEvent">
            <!--
            <div class="input mb-3">
              <label for="inputFiles" class="btn">Select an Image</label>
              <input type="file" class="form-control" id="inputFiles" name="image">
            </div>
            -->

            <div class="mb-3">
              <label for="inputImg" class="form-label">Image URL</label>
              <input type="url" class="form-control" id="inputImg" name="image" value="${data.image}">
            </div>

            <div class="mb-3">
              <label for="inputTitle" class="form-label">Title</label>
              <input type="text" class="form-control" id="inputTitle" name="title" value="${data.title}">
            </div>

            <div class="mb-3">
              <label for="inputDescription" class="form-label">Description</label>
              <textarea type="text" class="form-control" id="inputDescription" name="description">${data.description}</textarea>
            </div>

            <div class="mb-3">
              <label class="form-label" for="inputGroupSelect01">Category</label>
              <select class="form-select" id="inputGroupSelect01" name="category" value="${data.category}">
                <option value="${data.category}" selected>${data.category}</option>
                <option value="Celebration">Celebration</option>
                <option value="Festivity">Festivity</option>
                <option value="Activity">Activity</option>
                <option value="Rite">Rite</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="inputLocation" class="form-label">Location</label>
              <input type="text" class="form-control" id="inputLocation" name="location" value="${data.location}">
            </div>

            <div class="mb-3">
              <label for="inputDate" class="form-label">Date</label>
              <input type="datetime-local" class="form-control" id="inputDate" name="date" value="${date}"}>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" id="edit-confirm" class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
`;
};
