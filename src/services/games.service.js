
const Game = require('../models/Game');

const findGamesService = async () => {
  const games = await Game.find();
  return games;
};
  
const findGameByIdService = (id) => {
    return games.find((game) => game.id == id);
  };

const createGameService = (newGame) => {
    const newId = games.length + 1;
    newGame.id = newId;
    games.push(newGame);
    return newGame;
  };  

const updateGameService = (id, gameEdited) => {
    gameEdited['id'] = id;
    const gameIndex = games.findIndex((game) => game.id == id);
    games[gameIndex] = gameEdited;
    return gameEdited;
  };

const deleteGameService = (id) => {
    const gameIndex = games.findIndex((game) => game.id == id);
    return games.splice(gameIndex, 1);
  };

module.exports = {
    findGamesService,
    findGameByIdService,
    createGameService,
    updateGameService,
    deleteGameService,
  };  
