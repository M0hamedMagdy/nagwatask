let DBManager = require("../models/model");
const nounList = DBManager.getNoun();
const verbList = DBManager.getVerb();
const adjectiveList = DBManager.getAdjective();
const adverbList = DBManager.getAdverb();

let result = [];
let counter = 0;

module.exports.getRandomList = function getRandomList(len = 10) {
  // Assuming the data list equal 15
  len = len > 15 ? 15 : len;
  while (result.length < len) {
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
  return result;
};

function getNewNoun() {
  if (nounList.length) {
    let i = Math.floor(Math.random() * nounList.length);
    result.push(nounList[i]);
    nounList.splice(i, 1);
  }
  return;
}

function getNewVerb() {
  if (verbList.length) {
    let i = Math.floor(Math.random() * verbList.length);
    result.push(verbList[i]);
    verbList.splice(i, 1);
  }
  return;
}

function getNewAdjective() {
  if (adjectiveList.length) {
    let i = Math.floor(Math.random() * adjectiveList.length);
    result.push(adjectiveList[i]);
    adjectiveList.splice(i, 1);
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    let i = Math.floor(Math.random() * adverbList.length);
    result.push(adverbList[i]);
    adverbList.splice(i, 1);
  }
  return;
}
