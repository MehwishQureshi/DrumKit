//adding event listener to all of the buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

//for detecting button press
for (var i = 0; i < numberOfButtons; i++) {
  /*document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("i got clicked");
    });*/

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
});
}

function playSound(ch){

  switch(ch){

    case "w" :
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "a" :
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case "s" :
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    default:
    console.log(ch);
  }
}

//adding event listener just for the first button
/*document.querySelector("button").addEventListener("click",function(){
    alert("i got clicked");
});*/

//for detecting key press
addEventListener("keypress",function(event){
  
  var key = event.key;
  playSound(key);
  addAnimation(key);
});

function addAnimation(currentKey){

    //to create animation effect

    //add the "pressed" class
    var currElement = document.querySelector("." + currentKey);
    currElement.classList.add("pressed");

    //after some timeout remove that class from the classList
    setTimeout(function(){
      currElement.classList.remove("pressed");
    },100);

}