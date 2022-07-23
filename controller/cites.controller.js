let cities = require("../models/cities.model");
var score = require("string-score");

let getScore = (data, term) => {
  var suggestions = [];
  data.map((city) => {
    suggestions.push({
      name: city.name,
      latitude: city.lat,
      longitude: city.long,
      distance: score(city.name, term),
    });
  });
  suggestions.sort(function (a, b) {
    return b.distance - a.distance;
  });
  return suggestions;
};
const getAllCities = async (req, res) => {
  try {
    let searchTerm = req.query;
    let sort = req.query.sort;
    const regex = new RegExp(searchTerm?.q, "i"); // i for case insensitive
    let sortQuery = searchTerm?.sort;
    const _cities = await cities.find({
      name: { $regex: regex },
      ...searchTerm,
    });
    let newCitites = getScore(_cities, searchTerm?.q);
    if (sort !== undefined) {
      let sortedCities;
      if (sort === "name") {
        sortedCities = newCitites.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (sort === "distance") {
        sortedCities = newCitites.sort(function (a, b) {
          return b.sort - a.sort;
        });
      } else {
        sortedCities = newCitites;
      }
      res.json({
        suggestions: sortedCities,
      });
    } else {
      res.json({
        suggestions: newCitites,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllCities,
};
