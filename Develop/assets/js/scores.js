// to submit user's score
let SubmitEvent = document.getElementById('submit');
SubmitEvent.addEventListener('click', SubmitUserInitials);
let initials = document.getElementById('initials'); // store the user's initials in local storage
let
// function to submit user's initials
function SubmitUserInitials() {
    //alert('Thank you for playing!');
    //get the user's initials
    let userInitials = initials.value;
    //store the user's initials in local storage https://www.w3schools.com/jsref/prop_win_localstorage.asp 
    localStorage.setItem('userInitials');
    //store the user's score in local storage
    localStorage.setItem('userScore'); 
    //redirect to the high scores page
    window.location.href = 'high-scores.html';
}
