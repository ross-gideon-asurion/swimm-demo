const { url } = require("inspector");

function getRandomPhoto(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Client-ID VXz2tp7ATGvAyVvF-XmUzXmN6kqm1w475cMXDv18huk"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let urlQuery = null;
  if (req.body?.query) {
    urlQuery = `?query=${req.body.query}`;
  }

  let urlPath =
    "https://api.unsplash.com/photos/random" + (urlQuery ? urlQuery : "");

  fetch(urlPath, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      res.send(result);
    })
    .catch((error) => console.log("error", error));
}

module.exports = {
  getRandomPhoto,
};
