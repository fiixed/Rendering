/*jshint esversion: 6 */
function renderStudents(students) {
  var nameHTML = students.map(
    (
      x
    ) => `<div style="border: solid 1px black; margin: 0 auto; text-align: center; width: 300px; height: 100px; background-color: ${
      x.isPresent ? "#8dff00" : "#f0352d"
    }">
        <h2>${x.name}</h2>
        <h5>${x.isPresent ? "Present" : "Absent"}</h5>
      </div>`
  );
  return `
        <div style="border: solid 1px black; margin: 0 auto; text-align: center; width: 400px; height: 100%;">
        <h1>Roll Call!</h1>
        ${nameHTML.join("<br>")}</div>`;
}

function students() {
  var content = document.getElementById("content");

  var studentsAbstraction = [
    {
      name: "Kamilah",
      isPresent: true,
    },
    {
      name: "Kim",
      isPresent: true,
    },
    {
      name: "Stuart",
      isPresent: false,
    },
    {
      name: "Ron",
      isPresent: true,
    },
    {
      name: "Krissy",
      isPresent: false,
    },
  ];

  content.innerHTML = renderStudents(studentsAbstraction);
}
