const route = require('express').Router();
const controllerGames = require('../controllers/games.controller');
const { validId, validObjectBody } = require('../middlewares/game.middleware');

route.get('/all-games', controllerGames.findAllGamesController);
route.get('/one-game/:id', validId, controllerGames.findByIdGameController);
route.post('/create-game', validObjectBody, controllerGames.createGameController);
route.put('/update-game/:id',validId, validObjectBody,  controllerGames.updateGameController);
route.delete('/delete-game/:id', validId, controllerGames.deleteGameController);

module.exports = route;
