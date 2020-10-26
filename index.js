const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = 3000;

//let articles = require("articles/articles.js");
let authors = require("./authors/authors");
let articles = require("./articles/articles");


const baseMiddlewares = [
  bodyParser.json({limit: "20mb"}),
  bodyParser.urlencoded({ extended: true }),
  cors()
];

baseMiddlewares.forEach(midlleware => {
  app.use(midlleware)
});

// 1a. Return a list of authors with their articles and country.

app.get("/authors",(req,res) => {
  res.json(authors.getAuthors())
});

///1b POST Add a new article with an author that might or might now exist.
  //If the author does not exist then it should be created with an empty country.
  //req.body.author_name:string req.body.title:string
  app.post("/articles",(req,res)=>{
    res.json(articles.createArticle(req.body.authorName, req.body.title))
  });
  //1c PUT Update one or multiple articles title and author.
  //req.body.articles:Array
  app.put("/articles",(req,res)=>{
    res.json(articles.updateArticles(req.body.articles))
  });
// 1d. Delete one or multiple articles.

app.delete("/articles",(req,res)=>{
  res.json(articles.deleteArticles(req.body.articlesId))
});

app.listen(port, () => console.log(`App listening on http://127.0.0.1:${port}`));