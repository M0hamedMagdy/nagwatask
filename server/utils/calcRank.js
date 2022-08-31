let DBManager = require("../models/model");
const scoresList = DBManager.getScores();

module.exports.calcRank = function calcRank(score) {
  let userScore = scoresList.filter((i) => i < score);
  let rank = ((userScore.length / scoresList.length) * 100).toFixed(2);
  return rank;
};
