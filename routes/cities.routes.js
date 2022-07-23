const express = require("express");

const citiesController = require("../controller/cites.controller");

const router = express.Router();
router.get("/suggestions", citiesController.getAllCities);

module.exports = router;
