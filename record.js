// fill in javascript code here
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var employeeID = document.getElementById("employeeID").value;
  var department = document.getElementById("department").value;
  var exp = parseInt(document.getElementById("exp").value);
  var email = document.getElementById("email").value;
  var mbl = document.getElementById("mbl").value;
  var role = getRole(exp);

  var newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${name}</td>
      <td>${employeeID}</td>
      <td>${department}</td>
      <td>${exp}</td>
      <td>${email}</td>
      <td>${mbl}</td>
      <td>${role}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
  `;
  document.querySelector("tbody").appendChild(newRow);
  document.querySelector("form").reset();
});

function getRole(experience) {
  if (experience > 5) {
    return "Senior";
  } else if (experience >= 2 && experience <= 5) {
    return "Junior";
  } else if (experience <=1 ) {
    return "Fresher";
  }else{}
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}