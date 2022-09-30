'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0
console.log(`Wow! You found the secret answer in the console! The answer is: ${secretNumber}`)

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const victoryStyle = (text, width, bg) => {
    document.querySelector('.number').textContent = text
    document.querySelector('.number').style.width = width
    document.querySelector('body').style.backgroundColor = bg

}


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage(`You didn't pick anything!🥺 Pick a number!`)
    } else if (guess === secretNumber) {
        displayMessage(`Correct! 🎉`)
        victoryStyle(secretNumber, '30rem', '#60b347')

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').innerText = score
        }


    } else if (guess !== secretNumber) {
        score--
        document.querySelector('.score').textContent = score

        document.querySelector('.message').textContent = guess > secretNumber ? `Too High! Try lower? 🔽` : `Too Low! Try higher? 🔼`;

    }

    if (score <= 0) {
        displayMessage(`Game Over 🤡`)
        score = 0
        document.querySelector('.score').textContent = score
    }
});

// CODING CHALLENGE

/* 

Implement a game reset functionality so that the player can make a new guess using the 'Again!' button.


Pseudo:

- Re-randomize secretNumber
- Reset score and display to .score
- Reset .message
- Clear .guess so past guess doesnt remain
- Clear victory style manipulation

*/

document.querySelector('.reset').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = `Start guessing...`
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'

    console.log(`Wow! You found the secret answer in the console! The answer is: ${secretNumber}`)
})
