const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");

const app = express();
mongoose
  .connect(
    "mongodb+srv://caleb:katrylianmespotes@cluster0.51aqkoz.mongodb.net/comment?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
  mongoose.set('strictQuery', false);
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/", userRoutes);
app.use("/", commentRoutes);

module.exports = app;
