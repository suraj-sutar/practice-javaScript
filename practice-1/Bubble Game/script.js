//how to create randome number
//using Math.random() we get randome number between 0 and 1
//when we are multiple that number by 10 it's give me a numbe between 1 - 10 with point value
//Math.random()*10
//if you want to remove that point value then use
// Math.floor(Math.random() * 10);

//create function for create bubble-->

function makeBubble() {
  let clutter = "";
  for (let index = 0; index <= 209; index++) {
    let randomeNum = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${randomeNum}</div>`;
  }
  document.querySelector("#panelBottm").innerHTML = clutter;
}

//create function for timer-->
//first create globle variable for timer
var timer = 60;
function runTimer() {
  // then create setTimeinterval for decrement of timer by 1 sec
  let timerInterval = setInterval(function () {
    //if the time is less than 0 the stop the decrement process
    if (timer > 0) {
      timer--;
      //after timer is decrease then change the html page time value aslo
      //for that we use querySelector
      document.querySelector("#timerDisplay").innerHTML = timer;
    } else {
      //after that close ther time Interval
      clearInterval(timerInterval);

      //game over msg
      document.querySelector(
        "#panelBottm"
      ).textContent = `Game Over! Score : ${score}`;
    }
  }, 1000);
}

//create function for hit-->
var hitNum;
function randomHitNum() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitDisplay").textContent = hitNum;
}

//here we are use bubble Event:
var score = 0;
function increaseScore() {
  score = score + 10;
  document.querySelector("#scoreDisplay").textContent = score;
}

//compare hit and bubble clicked value
//to get buuble value first i use addEventListner on parent then we use target
//usign targer we get that tag but i dont want that tag i want that target textcontent
//that textcontent in the form of sting then convert that string into number Using Number()

document
  .querySelector("#panelBottm")
  .addEventListener("click", function (bubble) {
    var clickBubbleVal = Number(bubble.target.textContent);
    if (clickBubbleVal === hitNum) {
      console.log(`match`);
      increaseScore();
      makeBubble();
      randomHitNum();
    } else {
      console.log(`not match`);
    }
  });

runTimer();
makeBubble();
randomHitNum();
// increaseScore();
