const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const api = require("./routes/api");

const app = express();

app.engine("handlebars", engine({}));

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// app.set("views", path.join(__dirname, "src", "views"));

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// ); //middleware for cors: cross origin requests
app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
