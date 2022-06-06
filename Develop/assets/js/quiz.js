
// create handlers and event listeners for buttons
// a) start button 
let startGameBtn = document.getElementById('startQuizBtn');
startGameBtn.addEventListener('click', callIntroduction);
// b) quit button
let quitGameBtn = document.getElementById('quitQuiz');
quitGameBtn.addEventListener('click', backToQuizTitle);
// c) continue button
let continueGame = document.getElementById('continue');
continueGame.addEventListener('click', startTheQuiz);

// create variables for timer, questionIndex, and score
let timer = 60;
let questionIndex = 0;
let score = 0;
let timerInterval;


//other variables to store elements of the page
let questionsScreen = document.getElementById('questionsScreen');
let endOfQuizScreen = document.getElementById('endOfQuizScreen');
let instructions = document.getElementById('instructions');
// let finalScore = document.getElementById('finalScore');
let scoreTimeContainer = document.getElementById('score-time-container');


// function to display the game introductiion and rules
function callIntroduction() {
    // alert('I am Alive'); /* working!!!! */
    // after button is clicked, the button should be hidden.
    // document.getElementById('startQuizBtn');
    startQuizBtn.style.visibility = 'hidden';

    // then the instruction container is displayed
    //document.getElementById('instructions');
    instructions.style.visibility = 'visible';

    scoreTimeContainer.style.visibility = 'hidden';
   
} 

/* function to return to default screen if game is quitted
(hide introduction screen and show start button)*/
function backToQuizTitle() {
    // alert('I am the quit button I am Alive'); 
    //hide introduction screen
    document.getElementById('quitQuiz');
    instructions.style.visibility = 'hidden';
    
    //show start button
    document.getElementById('startQuizBtn');
    startQuizBtn.style.visibility = 'visible';

    //message displayed on screen when game is quitted
    feedback.textContent = 'CHICKEN DINNER!!!?';
    feedback.style.color = 'red';
    feedback.style.fontSize = '30px';
    feedback.style.fontWeight = 'bold';
    feedback.style.visibility = 'visible';
    feedback.style.bottom = '60px';

    //this code moves the start button away from the feedback message
    startGameBtn.style.top = '40%';


}

//function to start the game
function startTheQuiz(){
    // alert('Click OK to start the Game'); 
    //document.getElementById('quitQuiz');
    instructions.style.visibility = 'hidden'; // hide the instructions

    // call the question screen 
    /*A block-level element always starts on a new 
    line and takes up the full width available 
    (stretches out to the left and right as far as it can). www.w3schools.com*/
    questionsScreen.style.display = 'block';
    questionsScreen.style.width = '100%';
    questionsScreen.style.visibility = 'visible';
    
    scoreTimeContainer.style.visibility = 'visible'; // show the score and timer

    feedback.style.visibility = 'hidden'; // hide the feedback message that was displayed when the game was quitted
    


    /*the function startTimerCountdown() created below,
    is passed insside this function so that the click event that 
    calls this function (StartTheGame function) calls the startTimerCountdow*/ 
    startTimerCountdown();

    // same process applies here (as with startTimerCountdown above)
    //display questions
    displayTheQuestions();

}

// function to end the game
function endTheGame() {     // called inside the startTimerCountdown function
    //stop the timer
    clearInterval(timerInterval); 

    //hide the questions
    document.getElementById('questionsScreen');
    questionsScreen.style.visibility = 'hidden';

    //display the end of game screen
    endOfQuizScreen.style.visibility = 'visible';
}

/**  //function to start the timer. 
 * This function is called inside the StartTheGame function */
function startTimerCountdown() {    // TASK COMPLETED!!!

    /*nested function to start timer and when 0,
     stop the time and hide the question screen*/
     timerInterval = setInterval(function(){

        // to display the timer
        document.getElementById('time').textContent = timer;

        //to decrease time
        timer--;

        /*when timer counts is down to 0, stop the time, (using the endTheGame function) and
        hide the questions */
        if (timer === 0) {
            //stop Timer
            endTheGame();
        }
    }, 1000);
}

/** function to display the questions and choices. 
 * This function is called inside the startTheQuiz function */
function displayTheQuestions() {
        
    //alert('Am I alive? ask me a question'); 

    //display the question

    let questionTitle = document.getElementById('questionHeader');
    questionTitle.textContent = questions[questionIndex].title;
    
    //display the choices
    let choices = document.getElementById('choices');
    choices.innerHTML = '';

    //loop through the choices and display them. The choices are stored in the external questions.js file
    //the method to use the data in the external js. file is web api
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
    //let soundCorrect = ('./sfx/correct.wav'); //get the audio file
    //let soundIncorrect = ('./sfx/incorrect.wav'); //get the audio file
   
    feedback.style.color = 'black'; //change the color of the feedback message to black
    
    if (userChoice === correctAnswer) {
        score++;
        feedback.style.fontWeight = 'bold';
        feedback.style.padding = '12px'; //padding used to add space around the text content, in this case, helps to make the text more readable when screen is resized
        feedback.style.color = 'green'; //change the color of the feedback message to green to signify the game is over
        feedback.textContent = 'Correct!' + ' ' + 'You got ' + score + ' ' + 'points' + ' ' + 'out of ' + questions.length;
        // document.getElementById('score').textContent = score; //display the score
        //display the score score and correct answer text
       
        feedback.style.visibility = 'visible'; //display the feedback 
          
        //soundCorrect.play(); //play the sound from the sfx folder

    }
    else {
        //display the user score and correct answer text using concatenation of strings ans variables
        
        feedback.style.fontWeight = 'bold';
        feedback.style.padding = '12px'; //padding used to add space around the text content, in this case, helps to make the text more readable when screen is resized
        feedback.style.color = 'red'; //change the color of the feedback message to red to signify the game is over
        
        feedback.textContent = 'Incorrect!' + ' ' + 'The correct answer is ' + correctAnswer + ' ' + 'You got ' + score + ' ' + 'points' + ' ' + 'out of ' + questions.length;
        timer -= 10;                                                        //var in line 148                //var in line 168                               //js pre defined 
        
        feedback.style.visibility = 'visible'; //display the incorrect answer text
        
        //soundIncorrect.play(); //play the sound from the sfx folder
    }

    //increment the question index and run the displayTheQuestions function again
    questionIndex++;
    //displayTheQuestions();

    if (questionIndex === questions.length) {
        //display the correct answer text
        feedback.textContent = 'Correct!' + ' ' + 'You got ' + score + ' ' + 'points' + ' ' + 'out of ' + questions.length;
        //wait for 3 seconds and then display the end of game screen
        // setTimeout(function(endTheGame), 3000);
        endTheGame();
    
        feedback.style.fontWeight = 'bold';
        feedback.style.padding = '10px'; //padding used to add space around the text content, in this case, helps to make the text more readable when screen is resized
        feedback.style.color = 'black'; //change the color of the feedback message to black to signify the game is over
        feedback.textContent = 'GAME OVER!!!' + ' ' + ' You got ' + ' ' + timer + ' seconds' + ' remaining, ' + score + ' ' + ' out of ' + questions.length + ' ' + ' questions answered correctly, ' + ' AND 5 STARS ***** ' + ' for participating in the quiz!';
    } 
    else {
       displayTheQuestions();
    }

}

//to finish the quiz
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', toFinishQuiz);

// function to store the user's score and submit the score to the local storage
function submitScore() {
    //get the user's score
    let userScore = score;
    //store the user's score in the local storage
    localStorage.setItem('userScore', userScore); // ref: https://www.w3schools.com/jsref/prop_win_localstorage.asp

}

// function to store the user's initials 
function saveUserInfo() {
    //get the user's initials and store it in a variable
    let userInitials = document.getElementById('userInitials').value;
    window.localStorage.setItem('userInitials', userInitials);
    //userInitials.createElement('p');
    userInitials.textContent = userInitials;
    //userInitials.appendChild(p);
}
    

function toFinishQuiz() {
    saveUserInfo();
    submitScore();
    //redirect the user to the high scores page
    window.location.href = 'highScores.html';
}


















