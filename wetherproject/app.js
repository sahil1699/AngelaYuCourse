const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
  res.sendfile(__dirname + "/index.html");
});

app.post("/",function(req,res){


  const query = req.body.city;
  const apikey = "d37ddfd64bb8168dee3f6065e4f9c7c6";
  const units = "metric"

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+ apikey +"&units="+units+"";



  https.get(url, function(response){

    response.on("data",function(data){
      const weatherdata = JSON.parse(data);
      const temp = weatherdata.main.temp;
      const discription = weatherdata.weather[0].description;
      const icon = weatherdata.weather[0].icon;
      const iconUrl = " http://openweathermap.org/img/wn/"+ icon +"@2x.png";

      res.write("<h1> tem in "+query+" is "+  temp+" </h1>");
      res.write("<h3> "+discription +"</h3>" );
      res.write("<img src = " + iconUrl+ ">")
      res.send();

      //console.log(temp);
    });

    // console.log(response);
  });

  //res.send("helloo ");

});



app.listen(3000,function(){
  console.log("server is running at port 3000");
});
