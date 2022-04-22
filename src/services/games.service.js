
const Game = require('../models/Game');

const findGamesService = async () => {
  const games = await Game.find();
  return games;
};
  
const findGameByIdService = async (id) => {
  const game = await Game.findById(id);
  return game;
};

const createGameService = async (newGame) => {
  const gameCriada = await Game.create(newGame)
  return gameCriada;
};  

const updateGameService = async (id, gameEdited) => {
  const gameAtualizada = await Game.findByIdAndUpdate(id, gameEdited);
  return gameAtualizada;
};

const deleteGameService = async (id) => {
  return await Game.findByIdAndDelete(id);
};

module.exports = {
    findGamesService,
    findGameByIdService,
    createGameService,
    updateGameService,
    deleteGameService,
  };  
