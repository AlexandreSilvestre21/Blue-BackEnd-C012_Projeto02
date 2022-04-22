const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const game = req.body;
  if (
    !game ||
    !game.titulo ||
    !game.empresa ||
    !game.ano
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do game!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
