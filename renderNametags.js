/*jshint esversion: 6 */
function renderNametags(names) {
  var nameHTML = names.map(
    (
      x
    ) => `<div style="border: solid 1px black; text-align: center; width: 400px; height: 150px;">
    <div class="header" style="background-color: blue; color: white;">
      <h2>Hello, my name is: </h2>
    </div><br>
    <h2>${x}</h2>
  </div>`
  );
  return `
    <div class="text-center mt-5">
    ${nameHTML.join("")}</div>`;
}

function nametags() {
  var content = document.getElementById("content");

  var nametagsAbstraction = ["Kamilah", "Kim", "Stuart", "Ron", "Krissy"];

  content.innerHTML = renderNametags(nametagsAbstraction);
}
