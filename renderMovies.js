/*jshint esversion: 6 */
function renderMovies(movies) {
  var cards = movies.map(
    (x) => `
            <div style="display: flex; background-color: #a8a8a8; width: 400px; height: auto; padding: 1.5%; ">
            <img src="${x.poster}" style="width: 100px;">
            <div style="background-color: #d4d4d4; width: 250px; margin-left: 3%; border-radius: 5%; padding: -20px 20px"><h4>${
              x.title
            }</h4>
            <p style="margin-bottom: 5px">${x.year}</p>
            <p>IMDB:</p>
            <p style="margin-top: -25px">${x.imdbRating} / 10</p>
            <p>Rotten Tomatoes:</p>
            <p style="margin-top: -25px">${x.rottenTomatoesRating * 100}%</p>
            </div>
            </div>
            </div>
                
              `
  );
  return `
                <div style="display: flex; flex-direction: column; justify-content: center; align-content: center; padding: 1%;">
                
                ${cards.join("<br>")}</div>`;
}

function movies() {
  var content = document.getElementById("content");

  var moviesAbstraction = [
    {
      title: "The Dark Knight",
      year: 2008,
      imdbID: "tt0468569",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      imdbRating: 9,
      rottenTomatoesRating: 0.94,
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      imdbID: "tt1345836",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
      imdbRating: 8,
      rottenTomatoesRating: 0.82,
    },
    {
      title: "The Incredibles",
      year: 2004,
      imdbID: "tt0317705",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
      imdbRating: 9,
      rottenTomatoesRating: 0.91,
    },
  ];

  content.innerHTML = renderMovies(moviesAbstraction);
}
