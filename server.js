const app = require("./app");
const http = require("http").Server(app);
const cors = require("cors");
const Comment = require("./models/comment");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} est connecté!`);
  Comment.find()
    .sort({ createdAt: -1 })
    .populate("userId")
    .then((result) => {
      socket.emit("output-comments", result);
      console.log(result);
    });

  socket.on("comment", (comment) => {
    console.log(comment);
    const comments = new Comment(comment);
    comments.save().then(() => socketIO.emit("commentResponse", comment));
  });
  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  socket.on("disconnect", () => {
    console.log("🔥: l'utilisateur est deconnecté");
  });
});

http.listen(process.env.PORT || 5000, () =>
  console.log("Adresse du serveur : http://localhost:5000")
);
