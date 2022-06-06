let highscore = document.getElementById('highscores');

for (let i = 0; i < highscore.length; i++) {

    let li = document.createElement('li');
    li.textContent = localStorage.key(i) + 'score' + ' ' + localStorage.getItem(localStorage.key(i));
    highscore.appendChild(li);
}

// clear the local storage
let clearHighScoresBtn = document.getElementById('clear');
clearHighScoresBtn.addEventListener('click', clearLocalStorage);

function clearLocalStorage() {
    localStorage.clear();

    // clear the highscore list
    highscore.innerHTML = '';
}



