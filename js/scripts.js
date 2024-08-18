fetch('data/table.json')
    .then(response => response.json())
    .then(data => {
        displayRoles(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));

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
