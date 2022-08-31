let DBManager = require("../models/model");
const wordList = DBManager.getWords();
const nounList = DBManager.getNoun();
const verbList = DBManager.getVerb();
const adjectiveList = DBManager.getAdjective();
const adverbList = DBManager.getAdverb();

let words = [];
let counter = 0;

module.exports.getRandomList = function getRandomList(len = 10) {
  // Checking if the requested array is equal to data len.
  len = len > wordList.length ? wordList.length : len;
  while (words.length < len) {
    let mod = counter % 4;
    switch (mod) {
      case 0:
        getNewAdverb();
        break;
      case 1:
        getNewVerb();
        break;
      case 2:
        getNewNoun();
        break;
      case 3:
        getNewAdjective();
        break;
    }
    counter++;
  }
  return words;
};

function getNewNoun() {
  if (nounList.length) {
    let i = Math.floor(Math.random() * nounList.length);
    words.push(nounList[i]);
    nounList.splice(i, 1);
  }
  return;
}

function getNewVerb() {
  if (verbList.length) {
    let i = Math.floor(Math.random() * verbList.length);
    words.push(verbList[i]);
    verbList.splice(i, 1);
  }
  return;
}

function getNewAdjective() {
  if (adjectiveList.length) {
    let i = Math.floor(Math.random() * adjectiveList.length);
    words.push(adjectiveList[i]);
    adjectiveList.splice(i, 1);
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    let i = Math.floor(Math.random() * adverbList.length);
    words.push(adverbList[i]);
    adverbList.splice(i, 1);
  }
  return;
}
