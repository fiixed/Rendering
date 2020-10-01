/*jshint esversion: 6 */
function renderRestaurants(restaurants) {
  // HINT: You can use <img /> tags that point to these playing card images:
  // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
  var cards = restaurants.map(
    (x) => `
        <div style="text-align: left; background-color: #d7d7d7; width: 250px; padding: 1%; margin: 1%">
        <h1>${x.name}</h1>
        <h5 style="color: #686868">${x.type}</h5>
        <h3 style="color: #35c000">${"?".repeat(x.priceRating)}</h3>
        </div>
            
          `
  );
  return `
            <div style="display: flex; justify-content: center; padding: 1%">
            
            ${cards.join("")}</div>`;
}

function restaurants() {
  var content = document.getElementById("content");

  var restaurantsAbstraction = [
    {
      name: "McDonald's",
      type: "Fast Food",
      priceRating: 1,
    },
    {
      name: "Gunshow",
      type: "Date Night Dining",
      priceRating: 5,
    },
    {
      name: "Iron Age",
      type: "Korean BBQ",
      priceRating: 4,
    },
  ];

  content.innerHTML = renderRestaurants(restaurantsAbstraction);
}
