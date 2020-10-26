let countriesJSON = require("../data/countries.json");

function getCountry(country_code) {
    return countriesJSON[country_code.toLowerCase()];
};

module.exports.getCountry = getCountry;