let articlesJSON = require("../data/articles.json");
const fs = require("fs");
const path = require("path");
const articlesPath = path.resolve("../data/articles.json");



function getArticlesById(authorId) {
    
    let articlesList = [];
    for (let i = 0; i < articlesJSON.length; i++) {
        const article = articlesJSON[i];
           if(authorId === article.author_id) {
              const list = {
                  id:article.id,
                  title:article.title
              } 
              articlesList.push(list);
           };
    };
      return articlesList;
};

function createArticle(title,authorName) {
    
};

function save(){
    return fs.writeFile(articlesPath,JSON.stringify(articlesJSON), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
};

function updateArticles(articleUpdate){
   
}

function deleteArticles(articleId){
    articlesJSON=articlesJSON.filter(article => articleId !== (article.id));
    return save();
}

module.exports.getArticlesById = getArticlesById;
module.exports.createArticle = createArticle;
module.exports.updateArticles = updateArticles;
module.exports.deleteArticles = deleteArticles;