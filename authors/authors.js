let authorsJSON = require("../data/authors.json");
const articles = require("../articles/articles");
const countries = require("../countries/countries");
const fs = require("fs");
const path = require("path");
const authorsPath = path.resolve("../data/authors.json");

function getAuthors() {
    let authors = authorsJSON.map(author => ({ 
        id:author.id, 
        name:author.name, 
        article:articles.getArticlesById(author.id),
        country:countries.getCountry(author.country_code)
    }));
    
    return authors
};

// Return an Author if match

function findAuthor(authorName) {
    return authorsJSON.find(author => author.name === authorName);
};

function createAuthor(name,country_code = "") {
   
};

function save(){
    return fs.writeFile(authorsPath,JSON.stringify(authorsJSON), function (err) {
        if (err) return console.log(err);});
}

module.exports.getAuthors = getAuthors;
module.exports.findAuthor = findAuthor;
module.exports.createAuthor = createAuthor;