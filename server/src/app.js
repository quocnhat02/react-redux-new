const express = require("express");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "..", "public")));

// ROUTES
app.use(planetsRouter);

module.exports = app;
