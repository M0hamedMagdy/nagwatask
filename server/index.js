const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const randomListWorker = require("./utils/randomList");
const rankWorker = require("./utils/calcRank");

const app = express();
app.use(express.static("build"));
app.use(cors());
dotenv.config();

app.get("/", (request, response) => {
  response.send("<h1>This is an Api for Nagwa Quiz</h1>");
});

// words endpoint:
app.get("/api/words/:len", (request, response) => {
  const len = Number(request.params.len);
  let words = randomListWorker.getRandomList(len);
  // shuffle the array so that the result will not always be (adverb , verb, noun, adjective)
  words = words.sort((a, b) => 0.5 - Math.random());
  response.json(words);
});

// rank endpoint:

app.get("/api/scores/:score", (request, response, next) => {
  const userScore = request.params.score;
  let rank = rankWorker.calcRank(userScore);
  response.json({ rank: rank });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
