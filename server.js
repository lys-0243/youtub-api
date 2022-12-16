const app = require("./app");
const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} est connecté!`);
  socket.on("comment", (comment) => {
    console.log(comment);
    socketIO.emit("commentResponse", comment);
  });
  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  socket.on("disconnect", () => {
    console.log("🔥: l'utilisateur est deconnecté");
  });
});
app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(process.env.PORT || 5000, () =>
  console.log("Adresse du serveur : http://localhost:5000")
);
