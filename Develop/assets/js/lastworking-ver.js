
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
            time.textContent = '0'; //change the time to 0

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
        choice.style.padding = '10px';
        choice.style.margin = '10px';
        choice.setAttribute('class', 'optionBtn');
        choice.setAttribute('id', i);
        choice.onclick = userAnswer; //pass in the userAnswer function created below
        choice.textContent = questions[questionIndex].choices[i];
        choices.appendChild(choice);
    }
    
}
/** this function is called inside the displayTheQuestions function above 
 to handle the click event of the users selected choice */
function userAnswer(event) {
    let userChoice = event.target.textContent; // get the text of the user's choice
    let correctAnswer = questions[questionIndex].answer; //get the correct answer
    let feedback = document.getElementById('feedback'); //get the feedback div

    if (userChoice === correctAnswer) {
        feedback.textContent = 'Correct';
        score++;
        //display the score
        feedback.style.visibility = 'visible';
        
    }
    else {
        feedback.textContent = 'Incorrect';
        timer -= 10;
        //display the score
        feedback.style.visibility = 'visible';
    }

    //increment the question index and run the displayTheQuestions function again
    questionIndex++;
    // displayTheQuestions();

    if (questionIndex === questions.length && 
        timer === 0 || questionIndex === questions.length) {
        //display the score
        document.getElementById('endOfQuizScreen');
        endOfQuizScreen.style.visibility = 'visible';
        document.getElementById('finalScore');
        finalScore.textContent = finalScore; //display the score on the end of quiz screen
        finalScore.style.visibility = 'visible';
        //hide the questions
        document.getElementById('questionsScreen');
        questionsScreen.style.visibility = 'hidden';
        //stop the timer
        // clearInterval(timerInterval); /** did not work */
    }

    displayTheQuestions();

}








