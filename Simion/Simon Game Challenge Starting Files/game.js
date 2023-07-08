var box = ["red", "blue", "green", "yellow"];

var gamePattren = [];

var userClickedPattren = [];

var akey = false;

var level = 0;


$(document).keypress(function(event) {
  if (!akey) {
    akey = true;
    $("#level-title").text("LEVEL " + level);
    newSeqeunce();
  }
});



function newSeqeunce() {

  userClickedPattren = [];

  level++;
  var n = Math.random();

  var num = Math.floor(n * 4);

  gamePattren.push(box[num]);

  $("#level-title").text("LEVEL " + level);

  $("#" + box[num]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playsound(box[num]);


}

$(".btn").click(function() {
  var userChossenColor = $(this).attr("id");
  playsound(userChossenColor);

  userClickedPattren.push(userChossenColor);

  animatepress(userChossenColor);

  checkAnswer(userClickedPattren.length -1);

});


function checkAnswer(cur){

  if ( userClickedPattren[cur] === gamePattren[cur]){
    console.log("win");

    if (userClickedPattren.length === gamePattren.length ){
      setTimeout(function(){
        newSeqeunce();

      },1000);
    }
  }

  else {
    $("#level-title").text("Game Over, Press Any Key to Restart");


    var aud = new Audio("sounds/wrong.mp3");
    aud.play();

    restart();

    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 100);


    console.log("loss");
  }

}

function restart(){
  akey = false;
  level = 0;
  gamePattren  = [];
}



function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatepress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 200);

}




// newSeqeunce();



// "sounds/" + box[newSeqeunce()]  + ".mp3"
