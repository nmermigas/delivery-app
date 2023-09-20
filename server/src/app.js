const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { engine } = require("express-handlebars");

// const  {httpGetAllOrders} = require("")

const api = require("./routes/api");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// ); //middleware for cors: cross origin requests
app.use(morgan("combined"));

app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "..", "public")));

// app.get("/v1/orders", (req, res) => {});
app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
