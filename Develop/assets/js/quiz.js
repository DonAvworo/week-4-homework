
// create handlers and event listeners to buttons
// a) start button 
let startGameBtn = document.getElementById('startQuizBtn');
startGameBtn.addEventListener('click', callIntroduction);
// b) quit button
let quitGameBtn = document.getElementById('quitQuiz');
quitGameBtn.addEventListener('click', backToGameTitle);
// c) continue button
let continueGame = document.getElementById('continue');
continueGame.addEventListener('click', StartTheGame);

// function to display the game introductiion and rules
function callIntroduction() {
    // alert('I am Alive'); /* working!!!! */
    // after button is clicked, the button should be hidden.
    document.getElementById('startQuizBtn');
    startQuizBtn.style.visibility = 'hidden';

    // then the instruction container is displayed
    document.getElementById('instructions');
    instructions.style.visibility = 'visible';
   
}

/* function to return to default screen if game is quitted
(hide introduction screen and show start button)*/
function backToGameTitle() {
    // alert('I am the quit button I am Alive'); 
    //hide introduction screen
    document.getElementById('quitQuiz');
    instructions.style.visibility = 'hidden';
    
    //show start button
    document.getElementById('startQuizBtn');
    startQuizBtn.style.visibility = 'visible';
}

function StartTheGame(){
    // alert('Click OK to start the Game'); 
    //hide introduction screen
    document.getElementById('quitQuiz');
    instructions.style.visibility = 'hidden';

    // call the question screen 
    /*A block-level element always starts on a new 
    line and takes up the full width available 
    (stretches out to the left and right as far as it can). www.w3schools.com*/
    questionsScreen.style.display = 'block';

    /*the function startTimerCountdown() created below,
    is passed insside this function so that the click event that 
    calls this function (StartTheGame function) calls the startTimerCountdow*/ 
    startTimerCountdown();

    // same process applies here (as with startTimerCountdown above)
    //display questions
    displayTheQuestions();

}

// create variables and function for timer
let timer = 5;
let questionIndex = 0;
let score = 0;

function startTimerCountdown(){

    /*nested function to start timer and when 0,
     stop the time and hide the question screen*/
    let timerInterval = setInterval(function()
    {

        // to display the timer
        document.getElementById('time').textContent = timer;

        //to decrease time
        timer--;

        /*when timer counts is down to 0, stop the time,
        hide the questions and display the score*/
        if (timer === 0) {
            //stop Timer
            clearInterval(timerInterval);

            // //hide question screen
            // questions.style.visibility = 'hidden';

            // //to display scoreScreen
            // document.getElementById('endOfQuizScreen');
            // endOfQuizScreen.style.visibility = 'visible';

            // // to display score
            // document.getElementById('final score');
        }
    }, 1000);
}

/** function for questions and answers. This function will 
    be passed in the startTimerCountdown Function above, when
    timer is equal to 0 and stops counting, using the
    clearInterval(timerInterval); declaration.
*/



//array of questions to be called with function

  

//     let questionTitle = questions[questionIndex].questionHeader;
//     document.getElementById('questionHeader').textContent = questionTitle;

//     let questionOptions = questions[questionIndex].choices;
//     document.getElementById('choices').textContent = questionOptions;

// }

// //create a function that will call the answer to question
// function answerQuestion (){

//     questionIndex++;
//     displayTheQuestions();
    
// }



// b) submit button
// c) where to put the quiz
// d) text area for results
// e) text area for questions

// create handlers for buttons
// create a function to start quiz
// create a function to get timer counting 
// create a function that when a question is answered, moves page to the next
//