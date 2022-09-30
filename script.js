'use strict';

// VARIABLES
let score = 20
let highScore = 0



// FUNCTIONS
const randomizer = (max) => {
    return Math.floor(Math.random() * max) + 1
}


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const styleChange = (text, width, bg) => {
    document.querySelector('.number').textContent = text
    document.querySelector('.number').style.width = width
    document.querySelector('body').style.backgroundColor = bg

}

const setScore = (newScore) => {
    document.querySelector('.score').textContent = newScore
}


// SETTING NUMBER TO START THE GAME
let secretNumber = randomizer(20)

// 🐰🥚
console.log(`Wow! You found the secret in the console! The answer is: ${secretNumber}`)


// MAIN GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        displayMessage(`You didn't pick anything!🥺 Pick a number!`)
    } else if (guess === secretNumber) {
        displayMessage(`Correct! 🎉`)
        styleChange(secretNumber, '30rem', '#60b347')

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = score
        }


    } else if (guess !== secretNumber) {
        score--
        setScore(score)

        displayMessage(guess > secretNumber ? `Too High! Try lower? 🔽` : `Too Low! Try higher? 🔼`)
    }

    if (score <= 0) {
        displayMessage(`Game Over 🤡`)
        score = 0
        setScore(score)
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
    secretNumber = randomizer(20)
    score = 20
    setScore(score)
    displayMessage(`Start guessing...`)
    document.querySelector('.guess').value = ''

    styleChange('?', '15rem', '#222')

    console.log(`Wow! You found the secret in the console! The answer is: ${secretNumber}`)
})
