/*jshint esversion: 6 */
function renderCircles(circles) {
  // HINT: You probably need to write a for loop!
  //       Or, if you're feeling fancy, use .map()
  return `
        <div class="text-center mt-5" margin: 0 auto>
  ${circles.map(
    (x) =>
      `<div style="border-radius:50%; background-color:${x.color}; width: ${x.radius}px; height: ${x.radius}px;"></div>`
  )}</div>`;
}

function circles() {
  var content = document.getElementById("content");

  var circlesAbstraction = [
    {
      radius: 50,
      color: "#FF00FF",
    },
    {
      radius: 30,
      color: "#FF99AA",
    },
    {
      radius: 60,
      color: "#0000FF",
    },
    {
      radius: 10,
      color: "#000000",
    },
  ];

  content.innerHTML = renderCircles(circlesAbstraction);
}
