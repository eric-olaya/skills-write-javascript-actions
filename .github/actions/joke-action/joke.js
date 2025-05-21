const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub skills course."
  },
  json: true
};

async function getJoke() {

  const res = await request(options);
  
  return res.joke;
}

module.exports = getJoke;