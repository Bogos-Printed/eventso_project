export default (allParticipants) => (`
  <div class="modal fade" id="participant-modal" tabindex="-1" aria-labelledby="participantModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="participantModal">Participants</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <table class="table table-hover" id='participant-table'>
            <tr class="mb-3">
              <th class="ms-4" scope="col">name</th>
              <th class="ms-4" scope="col">firstname</th>
              <th class="ms-4" scope="col">email</th>
              <th> </th>
            </tr>
            ${allParticipants}
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`);
