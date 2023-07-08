const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB" , { useUnifiedTopology: true  , useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name : {
    type : String,
    required : [true, "Name must be there"]
  },
  rating : {
    type : Number,
    min : 1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name : "Apple",
  rating : 10,
  review : "good fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name :String,
  age : Number,
  favouriteFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name : "mango",
  rating : 10,
  review : "yeee good fruit"

});
mango.save();
// const person = new Person ({
//   name : "naman",
//   age : 20,
//   favouriteFruit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit ({
//   name : "kiwi",
//   rating : 100,
//   review : "very good fruit"
// });
// const orange = new Fruit ({
//   name : "orange",
//   rating : 73,
//   review : "good fds fruit"
// });
// const banana = new Fruit ({
//   name : "banana",
//   rating : 7,
//   review : "goodadsd fruit"
// });


// Fruit.insertMany([kiwi,orange,banana], function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Succesfully saved");
//   }
// });


Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }
  else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }
});



Person.updateOne({_id : "5edeec046261bf107ca683de"} , {favouriteFruit : mango } , function(err){
  if (err){
    console.log(err);
  }
  else{
    console.log("susssesfully saved");
  }
});


// Fruit.deleteOne({name: "peach"}, function(err){
//   if (err){ console.log(err);}
//   else {
//     console.log("deleted sucses");
//   }
// });

// Person.deleteMany({name : "sahil"}, function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("hhoo gaya delete");
//   }
// });
