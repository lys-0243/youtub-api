const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
const likeRoutes=require('./routes/like');
const disLikeRoutes = require('./routes/dislike');

const app = express();
const uri = "mongodb+srv://lys0243:DIpro0243@player-api-db.xn0mqge.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
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
app.use("/", likeRoutes);
app.use("/", disLikeRoutes);


module.exports = app;
