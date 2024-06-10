export default (allParticipants) => (`
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="participantModal">Participants</h1>
  </div>
  <div>
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
  <div class="text-end">
    <a href="/dashboard">
      <button type="button" class="btn btn-secondary">Close</button>
    </a>
  </div>
`);
