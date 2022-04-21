const gamesService = require('../services/games.service');

const findGamesController = async (req, res) => {
  const allGames = await gamesService.findGamesService();
  res.send(allGames);
};

const findGameByIdController = (req, res) => {
  const idParam = req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: "ID não informado!" })
  }

  const chosenGame = gamesService.findGameByIdService(idParam);

  if (!chosenGame) {
    return res.status(404).send({ message: "Game não encontrado!" })
  }

  res.send(chosenGame);
};

const createGameController = (req, res) => {
    const game = req.body;

    if ( 
      !game ||
      !game.titulo ||
      !game.empresa ||
      !game.ano) 
      {
        return res.status(400).send({ mensagem: "Você naõ preencheu todos os dados para adicionar um novo game!" });
    }

    const newGame = gamesService.createGameService(game);
    res.send(newGame);
  };
  
  const updateGameController = (req, res) => {
    const idParam = +req.params.id;
    const gameEdit = req.body;

    if (!idParam) {
      return res.status(404).send({ message: "Game não encontrado!" })
    }
  
    if (!gameEdit || !gameEdit.nome || !gameEdit.empresa || !gameEdit.ano) {
      return res.status(400).send({ message: "Você não preencheu todos os dados para editar o game!" });
    }

    const updatedGame = gamesService.updateGameService(idParam, gameEdit);
    res.send(updatedGame);
  };
  
  const deleteGameController = (req, res) => {
    const idParam = req.params.id;

    if (!idParam) {
      return res.status(404).send({ message: "Game não encontrado!" })
    }

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
