// Import necessary dependencies
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const path = require("path");
const compress = require("compression");
const cors = require("cors");
const InitiateMongoServer = require("./config/db");
const cities = require("./routes/cities.routes");
app.use(compress());
app.use(cors());

InitiateMongoServer();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/cities", cities);

app.get("/", function (req, res) {
  res.json({
    message: "Api Working",
  });
});
// Setup port
var port = process.env.PORT || 5000;
app.listen(port);
console.log("Server running at http://localhost:%d/", port);

module.exports = app;
