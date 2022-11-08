const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  categorie: { type: String, required: true },
  auteur: { type: String, required: true },
  userId: { type: String, required: false},
  description: { type: String, required: true },
  contenu: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Article", articleSchema);
