const fs = require("fs");
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')

const app = express();
app.use(express.static("build"));
app.use(cors());
dotenv.config();

// requiring the data from the Testdata json file and asign it with const for eaiser use..
let rawData = fs.readFileSync("TestData.json");
let data = JSON.parse(rawData);
const wordsList = data.wordList;
const scoreList = data.scoresList;





app.get("/", (request, response) => {
  response.send("<h1>This is an Api for Nagwa Quiz</h1>");
});

// words endpoint:
app.get("/api/words/:amount", (request, response) => {
  const amount = Number(request.params.amount);
  const words = new Array(amount);
   for(let i = 0; i < words.length; i++) { 
      let rand = Math.floor(Math.random() * words.length + 1);
      words[i] = wordsList[rand]
    }
  response.json(words);
});

// rank endpoint:
app.get("/api/scores/:score", (request, response) => {
  const userScore = request.params.score;
  const score = scoreList.filter((score) => score < userScore);
  const rank = Math.round((score.length / scoreList.length) * 100); // Round to 00.00 dighits
  response.json(rank);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
