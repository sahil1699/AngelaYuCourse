const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
  res.sendfile(__dirname + "/index.html");
});

app.post("/",function(req,res){

  // console.log(req.body);
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result= num1 + num2;
  res.send("The result of the calculation is " + result);

});


app.get("/bmi",function(req,res){
  res.sendfile(__dirname+"/bmical.html");
});

app.post("/bmi",function(req,res){

  console.log(req.body);
  var h = parseFloat(req.body.weight);
  var w = parseFloat(req.body.height);
  var bmi  = w/(h*h);
  res.send("bmi is " + bmi );

});

app.listen(3000,function(){
  console.log("sererver is rinning on port 3000");
});
