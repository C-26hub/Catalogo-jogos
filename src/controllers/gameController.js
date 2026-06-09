const Game = require("../models/Game");

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);

    return res.status(201).json(game);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

const getGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });

    return res.json(games);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({
        message: "Jogo não encontrado"
      });
    }

    return res.json(game);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!game) {
      return res.status(404).json({
        message: "Jogo não encontrado"
      });
    }

    return res.json(game);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);

    if (!game) {
      return res.status(404).json({
        message: "Jogo não encontrado"
      });
    }

    return res.json({
      message: "Jogo removido com sucesso"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
};