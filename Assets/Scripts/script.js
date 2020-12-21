//DOM ELEMENTS

var viewHighscores = document.getElementById("highscore");
var beginTest = document.getElementById("testStart");
var timeLeft = document.getElementById("timer");
var description = document.getElementById("container");
var time = 75;
var interval;
var score = 0;
var body = document.body;

//Dynamically created elements
var question = document.createElement("h2");
var answer = document.createElement("Button");
var container = document.createElement("div")

//Styling for created elements
question.setAttribute("style", "text-align:center");
answer.setAttribute("class", "btn btn-primary");
container.setAttribute("style", "text-align:center; margin-top:15%")

// Questions
question.textContent = "Inside which HTML element do we put the JavaScript?"
answer.textContent = "Sandwich"



//button event

beginTest.addEventListener("click", function(){

    //Hide description element
    description.style.display = "none"

    //Timer that stops at 0
    interval = setInterval(function() {
        time--;
        if (time === 0){
            clearInterval(interval);
        }
        timeLeft.textContent = "Time: "+ time
      }, 1000);

      body.appendChild(container);
      container.appendChild(question);
      container.appendChild(answer)
    

})

// On button press: Create a question and four buttons. When one is chosen, it is either correct or incorrect. If correct, increase score by 10 points, display "correct" and go to the next set. If incorrect display incorrect, reduce the timer by 10 seconds, and go to the next set.

//On test finish: Create header that says all done, a form to submit intitials, and a submit button

//Create highscore page that holds onto scores and initials within local storage. Also, go back button that resets the javascript. Also a clear highscores button

//On submit button click: Redirect to the highscore page and update highscore page.







  