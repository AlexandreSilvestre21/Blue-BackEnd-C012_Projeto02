const mongoose = require('mongoose'); 

const gamesService = require('../services/games.service');

const findGamesController = async (req, res) => {
  const allGames = await gamesService.findGamesService();
  res.send(allGames);
};

const findGameByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const chosenGame = await gamesService.findGameByIdService(idParam);

  if (!chosenGame) {
    return res.status(404).send({ message: 'Game não encontrado!' });
  }

  res.send(chosenGame);
};
const createGameController = async (req, res) => {
  const game = req.body;

  if (
    !game ||
    !game.titulo ||
    !game.ano
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar um novo game!',
    });
  }

  const newGame = await gamesService.createGameService(game);

  res.send(newGame);
};

const updateGameController = async (req, res) => {
  const idParam = req.params.id;
  const gameEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenGame = await gamesService.findGameByIdService(idParam);

  if (!chosenGame) {
    return res.status(404).send({ message: 'Game não encontrado!' });
  }

  if (
    !gameEdit ||
    !gameEdit.empresa ||
    !gameEdit.ano
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar o game!',
    });
  }

  const updatedGame = await gamesService.updateGameService(
    idParam,
    gameEdit,
  );

  res.send(updatedGame);
};

const deleteGameController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenGame = await gamesService.findGameByIdService(idParam);

  if (!chosenGame) {
    return res.status(404).send({ message: 'Game não encontrado!' });
  }

  await gamesService.deleteGameService(idParam);

  res.send({ message: 'Game deletado com sucesso!' });
};

module.exports = {
  findGamesController,
  findGameByIdController,
  createGameController,
  updateGameController,
  deleteGameController,
};
