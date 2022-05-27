
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

// create variables for timer, questionIndex, and score
let timer = 60;
let questionIndex = 0;
let score = 0;

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
    questionsScreen.style.width = '100%';
    questionsScreen.style.visibility = 'visible';


    /*the function startTimerCountdown() created below,
    is passed insside this function so that the click event that 
    calls this function (StartTheGame function) calls the startTimerCountdow*/ 
    startTimerCountdown();

    // same process applies here (as with startTimerCountdown above)
    //display questions
    displayTheQuestions();

}

/**  //function to start the timer. 
 * This function is called inside the StartTheGame function */
function startTimerCountdown() {    // TASK COMPLETED!!!

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

            //to display scoreScreen
            document.getElementById('endOfQuizScreen');
            endOfQuizScreen.style.visibility = 'visible';

            // to display score
            document.getElementById('final score');

            //hide the questions
            document.getElementById('questionsScreen');
            questionsScreen.style.visibility = 'hidden';
        }
    }, 1000);
}

/** function to display the questions and choices. 
 * This function is called inside the StartTheGame function */
function displayTheQuestions() {
        
    //alert('Am I alive? ask me a question'); 
    //display the question

    let questionTitle = document.getElementById('questionHeader');
    questionTitle.textContent = questions[questionIndex].title;
    
    //display the choices
    let choices = document.getElementById('choices');
    choices.innerHTML = '';

    //loop through the choices and display them
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        let choice = document.createElement('button');
        choice.setAttribute('class', 'optionBtn');
        choice.setAttribute('id', i);
        choice.textContent = questions[questionIndex].choices[i];
        choices.appendChild(choice);
    }
        
    


    

    // if (questionIndex === questions.length) {
    //     //display the score
    //     document.getElementById('final score');
    //     finalScore.textContent = score;

    //     //display the end of quiz screen
    //     document.getElementById('endOfQuizScreen');
    //     endOfQuizScreen.style.visibility = 'visible';
    // }
   
    
}

function userAnswer() {
    alert('Am I alive? ask me a question'); 
    //check the answer

   // checkAnswer();
}

// function checkAnswer () {
//     // alert('Am I alive? ask me a question'); 
//     //check if the answer is correct
//     if (this.textContent === questions[questionIndex].answer) {
//         // alert('Am I alive? ask me a question'); 
//         //if correct, increment the score
//         score++;
//         //alert('Am I alive? ask me a question'); 
//         //display the score
//         document.getElementById('final score');
//         finalScore.textContent = score;
//         // alert('Am I alive? ask me a question'); 
//         //display the next question
//         questionIndex++;
//         // alert('Am I alive? ask me a question'); 
//         //display the next question
//         displayTheQuestions();
//     } else {
//         //if incorrect, decrement the timer
//         timer--;
//         //display the next question
//         questionIndex++;
//         //display the next question
//         displayTheQuestions();
//     }
// }





