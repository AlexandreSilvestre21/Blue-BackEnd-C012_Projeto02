const mongoose = require('mongoose'); 

const gamesService = require('../services/games.service');

const findAllGamesController = async (req, res) => {
  const allGames = await gamesService.findAllGamesService();
  if (allGames.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum game cadastrado!' });
  }
  res.send(allGames);
};

const findByIdGameController = async (req, res) => {
  const idParam = req.params.id;
  const chosenGame = await gamesService.findByIdGameService(idParam);
  if (!chosenGame) {
    return res.status(404).send({ message: 'Game não encontrado!' });
  }
  res.send(chosenGame);
};

const createGameController = async (req, res) => {
  const game = req.body;
  const newPaleta = await gamesService.createGameService(paleta);
  res.status(201).send(newGame);
};

const updateGameController = async (req, res) => {
  const idParam = req.params.id;
  const editGame = req.body;
  const updatedGame = await gamesService.updateGameService(
    idParam,
    editGame,
  );
  res.send(updatedGame);
};

const deleteGameController = async (req, res) => {
  const idParam = req.params.id;
  await gamesService.deleteGameService(idParam);
  res.send({ message: 'Game deletado com sucesso!' });
};

module.exports = {
  findAllGamesController,
  findByIdGameController,
  createGameController,
  updateGameController,
  deleteGameController,
};
