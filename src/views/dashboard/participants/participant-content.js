export default (data) => (`
  <tr>
    <td>${data.firstname}</td>
    <td>${data.lastname}</td>
    <td>${data.email}</td>
    <td><button type="submit" class="btn btn-danger">Remove</button></td>
  </tr>
`);
