let score0 = document.getElementById('score-0');
let score1 = document.getElementById('score-1');
let dice = document.querySelector('.dice2');
let rollDice = document.querySelector('.btn-roll');
let current1 = document.querySelector('#current-0');
let player0 = document.querySelector('.player-0-panel');
let player1 = document.querySelector('.player-1-panel');
let holdBtn = document.querySelector('.btn-hold');
let newgame = document.querySelector('.btn-new');
let instruction = document.querySelector('.button1');
let close = document.querySelector('.close');
let instac = document.querySelector('.modal');
let reload = document.querySelector('.btn-new');


// instruction.classList.add('hidden')

score0.textContent = 0;
score1.textContent = 0;
let scores = [0, 0];
let current = 0;
let activePlayer = 0;

let switchPlayer = function () {
    current = 0;
    document.getElementById(`current-${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('active');
    player1.classList.toggle('active');
}

dice.classList.add('hidden')

rollDice.addEventListener('click', function () {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    // console.log(diceNumber);

    dice.classList.remove('hidden');

    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber != 1) {
        current += diceNumber;
        document.getElementById(`current-${activePlayer}`).textContent = current;
        // current1.textContent = current;
    }
    else {
        switchPlayer();
    }
})

holdBtn.addEventListener('click', function () {
    scores[activePlayer] += current;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        //  alert(`PLAYER ${activePlayer+1} IS THE WINNER`);
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        // document.querySelector(`.player-${activePlayer}-panel`).classList.remove('panel active');
        document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!!!';
        dice.classList.add('hidden')
        holdBtn.classList.add('hidden');
        rollDice.classList.add('hidden');
    }
    else {
        switchPlayer();
    }
})
newgame.addEventListener('click',function(){
    dice.classList.add('hidden');
    player0.classList.add('active');
    score0.textContent=0
    score1.textContent=0
})
close.addEventListener('click',function(){
    instac.classList.add('hidden');
})
instruction.addEventListener('click',function(){
    instac.classList.remove('hidden');
})
reload.addEventListener('click',function(){
    window.location.reload();
})