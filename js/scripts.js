// Fetches the JSON data from the file at data/table.json
// and calls the displayRoles() function with the parsed data
fetch('data/table.json')
    .then(response => response.json())
    .then(data => {
        displayRoles(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));

/*
  Takes an array of roles and inserts them as table rows into the
  element with the id 'rolesTableBody'. Each role is inserted as a
  table row with three columns: title, company name, and a comma-
  separated list of locations.
  @param {Array} roles - An array of role objects, each with the
  properties title, company_name, and locations.
 */
function displayRoles(roles) {
    const tableBody = document.getElementById('rolesTableBody');
    roles.forEach(role => {
        let row = `<tr>
            <td>${role.title}</td>
            <td>${role.company_name}</td>
            <td>${role.locations.join(', ')}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

