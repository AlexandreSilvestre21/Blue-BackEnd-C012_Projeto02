const mongooose = require('mongoose');

const GameSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    empresa: { type: String, required: true },
    ano: { type: Number, required: true },
  });

  const Game = mongoose.model('games', GameSchema);

  module.exports = Game;


