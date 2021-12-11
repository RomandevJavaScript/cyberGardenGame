//for background music
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 1.0;
    audio.play();
  });
//

var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementById("theBody");

function generateFaces(){
    for(var i=1; i<=numberOfFaces; i++){
        var image= document.createElement("img");
        image.src= "./img/orange.png";
        var randomNumerLeft = Math.floor(Math.random()*80);
        var randomNumerTop = Math.floor(Math.random()*80 +10);
        image.style.top= randomNumerTop + "%";
        image.style.left = randomNumerLeft + "%";
        theLeftSide.appendChild(image);
    }
    var leftSideImages = theLeftSide.cloneNode(true);

    theLeftSide.lastChild.onclick = function nextLevel(event){

        event.stopPropagation();

        while(theLeftSide.firstChild){theLeftSide.removeChild(theLeftSide.firstChild);}
        while(theRightSide.firstChild){theRightSide.removeChild(theRightSide.firstChild);}

        numberOfFaces += 5;

        generateFaces(); 
    };

    theBody.onclick = function gameOver() {

        alert("Game Over!");

        theBody.onclick = null;

        theLeftSide.lastChild.onclick = null;
    };

    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
}

window.onload = generateFaces();

//code for the timer
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
//start timer immdiately pages loads
startTimer();

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}
//end of timer code