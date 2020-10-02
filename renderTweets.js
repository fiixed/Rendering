/*jshint esversion: 6 */
function renderTweets(tweets) {
  var cards = tweets.map(
    (x) => `
    <div class="inner-container">
  <div class="header">
    <img id="profile" src="${x.user.profilePic}" />
    <div class="name">
      <div class="name-level">
        <h6>${x.user.username}</h6>
        <p id="handle">${x.user.handle}</p>
      </div>
    </div>
    <i class="fas fa-certificate verified"></i>
  </div>
  <div class="body">
    <h3>${x.text}</h3>
    <hr>
  </div>
  <div class="footer">
  <i class="far fa-comment"></i>
  <h6>${x.replies}</h6>
  <i class="fas fa-retweet"></i>
  <h6>${x.retweets}</h6>
  <i class="far fa-heart"></i>
  <h6>${x.likes}</h6>
  <i class="far fa-envelope"></i>
  </div>
</div>
                
              `
  );
  return `
  <div class="text-center mt-5 outer">
          
                ${cards.join("")}</div>`;
}

function tweets() {
  var content = document.getElementById("content");

  var tweetsAbstraction = [
    {
      user: {
        handle: "@officialjaden",
        username: "Jaden Smith",
        isVerified: true,
        profilePic:
          "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg",
      },
      text: "The Moment That Truth Is Organized It Becomes A Lie",
      likes: 231,
      retweets: 12,
      replies: 21,
    },
    {
      user: {
        handle: "@officialjaden",
        username: "Jaden Smith",
        isVerified: true,
        profilePic:
          "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg",
      },
      text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
      likes: 112,
      retweets: 2,
      replies: 24,
    },
    {
      user: {
        handle: "@DigitalCrafts",
        username: "DigitalCrafts Bootcamp",
        isVerified: false,
        profilePic:
          "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg",
      },
      text: "Sign up for our next course plz!",
      likes: 11,
      retweets: 3,
      replies: 14,
    },
  ];

  content.innerHTML = renderTweets(tweetsAbstraction);
}
