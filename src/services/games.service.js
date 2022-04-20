

const games = [
    {
      id: 1,
      titulo: 'Rally X',
      empresa:
        'Midway',
      ano:1982,      
    },
    {
      id: 2,
      titulo: 'Galaga',
      empresa:'Nanco',
      ano:1986,  
    },
    {
      id: 3,
      titulo: 'Moon Patrol',
      empresa:'Midway',
      ano:1985,  
    },
  ];

const findGamesService = () => {
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
