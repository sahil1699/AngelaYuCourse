//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();



app.set('view engine', 'ejs');


app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/wikiDB" , { useUnifiedTopology: true  , useNewUrlParser: true ,  useFindAndModify: false });

const articleSchema = {
  title : String,
  content: String
};

const Article = mongoose.model("Article",articleSchema);


app.route("/articles")

.get(function(req, res){
  Article.find(function(err, foundArticle){
    if (err){
      res.send(err);
    }
    else{
      res.send(foundArticle)
    }
  });
})

.post(function(req, res){
  const newArticle = new Article({
    title : req.body.title,
    content : req.body.content
  });
  newArticle.save(function(err){
    if (!err){
      console.log("seceesufullysend");
    }
    else{
      console.log(err);
    }
  });
})

.delete(function(req, res){
  Article.deleteMany(function(err){
    if (!err){
      res.send("secsesfully deletd");
    }
    else{
      res.send(err);
    }
  });
});

////////////aricaeles-page

app.route("/articles/:articlesTitle")

.get(function(req,res){

  Article.findOne({title : req.params.articlesTitle} , function(err, articlefound){
    if (articlefound){
      res.send(articlefound);
    }
    else{
      res.send("noo matching article");
    }
  })
})

.put(function(req,res){

  Article.update(
    {title : req.params.articlesTitle},
    {title : req.body.title , content : req.body.content},
    {overwrite :  true},
    function(err){
      if (!err){
        res.send("successfully updated article.");
      }
    }
  );
})

.patch(function(req,res){

  Article.update(
    {title : req.params.articlesTitle},
    {$set : req.body},
    function(err){
      if (!err){
        res.send("secussesfuly updated");
      }
      else{
        res.send(err);
      }
    }
  );

})

.delete(function(req,res){

  Article.deleteOne({title : req.params.articlesTitle},function(err){
    if (!err){
      res.send("secussesfuly deleted");
    }
    else{
      res.send(err);
    }
  });

});

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
