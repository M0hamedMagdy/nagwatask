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
app.get("/api/words/:amount", (request, response) => {
  const amount = Number(request.params.amount);
  let words = randomListWorker.getRandomList(amount);
  response.json(words);
});

// rank endpoint:

app.get("/api/scores/:score", (request, response, next) => {
  const userScore = request.params.score;
  let rank = rankWorker.calcRank(userScore);
  response.json({ rank: rank });
});

// app.get("/api/scores/:score", (request, response) => {
//   const userScore = request.params.score;
//   const score = scoreList.filter((score) => score < userScore);
//   const rank = Math.round((score.length / scoreList.length) * 100); // Round to 00.00 dighits
//   response.json(rank);
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
