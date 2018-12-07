let gameData = require('./Data/data.json');

let gameDataKeys = Object.keys(gameData.data);
let gameCategories = gameData.categories;
let urlArray = [];
let rankArray = [];
let imageDataWithRank = {};
  gameDataKeys.forEach(e => {
  let rankKey = gameData.data[e].rank;
  imageDataWithRank[rankKey] = { 
  url: gameData.data[e].assets.image,
  name: gameData.data[e].name.en,
  }
  urlArray.push(gameData.data[e].assets.image);
  rankArray.push(rankKey);
  }
);
rankArray.sort((a,b)=> a-b);

