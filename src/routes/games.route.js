const route = require('express').Router();
const controllerGames = require('../controllers/games.controller');


route.get('/games', controllerGames.findGamesController);
route.get('/game/:id', controllerGames.findGameByIdController);
route.post('/create-game', controllerGames.createGameController);
route.put('/update-game/:id', controllerGames.updateGameController);
route.delete('/delete-game/:id', controllerGames.deleteGameController);

module.exports = route;
