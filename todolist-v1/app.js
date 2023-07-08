const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["buy", "ja yee"];

let work = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extented : true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  let day = date.getDate();
  res.render("list" , {listtitle : day , newitem: items});
});

app.post("/",function(req,res){
  let item = req.body.try;
  if (req.body.list === "work"){
    work.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work",function(req,res){

  res.render("list" , {listtitle :  "work", newitem : work });

});

app.post("/work",function(req,res){
  let w = req.body.try;
  work.push(w);
  res.redirect("/work");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.listen(3000,function(){
  console.log("server is runin on port 3000");
});
