const fs = require("fs");
let testData = fs.readFileSync("models/TestData.json");
let data = JSON.parse(testData);
let wordList = data.wordList;
let scoreList = data.scoresList;

// Create sorted words based on pos

let sortedWords = {
  noun: [],
  verb: [],
  adverb: [],
  adjective: [],
};

// To make sure that the returend words will not be the same, I shuffled the dataTest.
wordList = wordList.sort((a, b) => 0.5 - Math.random());

// Pushing into SortedWords
for (let i of wordList) {
  sortedWords[i.pos].push(i);
}

// module expots functions
module.exports.getNoun = function getNoun() {
  return sortedWords["noun"];
};
module.exports.getVerb = function getVerb() {
  return sortedWords["verb"];
};
module.exports.getAdjective = function getAdjective() {
  return sortedWords["adjective"];
};
module.exports.getAdverb = function getAdverb() {
  return sortedWords["adverb"];
};
module.exports.getScores = function getScores() {
  return scoreList;
};
module.exports.getWords = function getWords() {
  return wordList;
};
