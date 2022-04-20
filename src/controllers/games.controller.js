const gamesService = require('../services/games.service');

const findGamesController = (req, res) => {
  const allGames = gamesService.findGamesService();
  res.send(allGames);
};

const findGameByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenGame = gamesService.findGameByIdService(idParam);
  res.send(chosenGame);
};

const createGameController = (req, res) => {
    const game = req.body;
    const newGame = gamesService.createGameService(game);
    res.send(newGame);
  };
  
  const updateGameController = (req, res) => {
    const idParam = +req.params.id;
    const gameEdit = req.body;
    const updatedGame = gamesService.updateGameService(idParam, gameEdit);
    res.send(updatedGame);
  };
  
  const deleteGameController = (req, res) => {
    const idParam = req.params.id;
    gamesService.deleteGameService(idParam);
    res.send({ message: 'Game deletado com sucesso!' });
  };

module.exports = {
  findGamesController,
  findGameByIdController,
  createGameController,
  updateGameController,
  deleteGameController,
};
