
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
if (!started){
 $("#level-title").text("level " + level);
setTimeout(function(){ nextSequence()},200);
 started = true;
}
});

$(".btn").click(function(){

   var userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
    animatePress(userChosenColor);
    toCheckAns(userClickedPattern.length-1);
});




function nextSequence() {

  userClickedPattern.length=0;
  level++;
  $("#level-title").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColor);

   playSound(randomChosenColor);

}


function toCheckAns(currenLevel){

var userlength = userClickedPattern.length;
if(gamePattern[currenLevel] === userClickedPattern[currenLevel]){
  console.log("success");
  if(gamePattern.length === userClickedPattern.length){
    setTimeout(function(){nextSequence()}
    ,1000);
  }
}
else {
playSound("wrong");
$("#level-title").text("gameOVER,press any key to start again");
$("body").addClass("game-over");
setTimeout(function(){
  $("body").removeClass("game-over");
},200);
starOver();
}

}


function starOver(){
  userClickedPattern.length = 0;
  gamePattern.length = 0
  level = 0;
  setTimeout(function () {

    started =false;
  },200);

}

function playSound(name){
  var sound = new Audio("sounds/" +name + ".mp3");

  sound.play();
}




function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");


setTimeout(function() {
 $("#" + currentColor).removeClass("pressed")
}, 100);
}
