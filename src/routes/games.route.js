const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/games.controller');

router.get('/find-games', gamesController.findGamesController);
router.get('/find-game/:id', gamesController.findGameByIdController);

router.post('/create', gamesController.createGameController);
router.put('/update/:id', gamesController.updateGameController);
router.delete('/delete/:id', gamesController.deleteGameController);

module.exports = router;
