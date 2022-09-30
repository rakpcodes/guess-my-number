'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20
console.log(secretNumber)

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value)
    const highScore = Number(document.querySelector('.highscore').innerText)

    if (!guess) {
        document.querySelector('.message').textContent = `You didn't pick anything!🥺 Pick a number!`
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `Correct! 🎉`
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('body').style.backgroundColor = '#60b347'

        if (score > highScore) {
            document.querySelector('.highscore').innerText = score
        }


    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = `Too High! Try lower? 🔽`;
        score--
        document.querySelector('.score').textContent = score

    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = `Too Low! Try higher? 🔼`
        score--
        document.querySelector('.score').textContent = score
    }

    if (score <= 0) {
        document.querySelector('.message').textContent = `Game Over 🤡`
        score = 0
        document.querySelector('.score').textContent = score
    }
});

// CODING CHALLENGE

/* 

Implement a game reset functionality so that the player can make a new guess using the 'Again!' button.


Notes:

- Re-randomize secretNumber
- Reset score and display to .score
- Reset .message
- Clear .guess so past guess doesnt remain
- Clear victory style manipulation

*/

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = `Start guessing...`
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
})
