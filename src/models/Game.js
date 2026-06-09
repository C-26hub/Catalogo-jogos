const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },

    plataforma: {
      type: String,
      required: true
    },

    genero: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Quero Jogar", "Jogando", "Finalizado"],
      default: "Quero Jogar"
    },

    nota: {
      type: Number,
      min: 0,
      max: 10
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Game", gameSchema);