/*jshint esversion: 6 */
function renderPokerHand(pokerHand) {
  // HINT: You can use <img /> tags that point to the card images in the /cards folder
  var cards = pokerHand.map(
    (x) => `
        <img src="cards/${x.value}${x.suit}.png" style="width:100px; height: auto;">
      `
  );

 
  return `
        <div class="text-center mt-5 row" style="display: flex;">
        <div class="col" style="flex: 20%; padding: 5px">
        ${cards.join("")}</div></div>`;
}

function pokerHand() {
  var content = document.getElementById("content");

  var pokerHandAbstraction = [
    {
      value: "K",
      suit: "C",
    },
    {
      value: "K",
      suit: "D",
    },
    {
      value: "9",
      suit: "S",
    },
    {
      value: "2",
      suit: "H",
    },
    {
      value: "9",
      suit: "H",
    },
  ];

  content.innerHTML = renderPokerHand(pokerHandAbstraction);
}
