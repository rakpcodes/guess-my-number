'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.message').textContent = `You didn't pick anything!🥺 Pick a number!`
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `Correct! 🎉`
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = `Too High! Try lower? 🔽`;
        score--
        document.querySelector('.score').textContent = score
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = `Too Low! Try higher? 🔼`
        score--
        document.querySelector('.score').textContent = score
    }

    if (score === 0) {
        document.querySelector('.message').textContent = `Game Over 🤡`
    } else if (score < 0) {
        document.querySelector('.message').textContent = `Game Over 🤡`
        score = 0
        document.querySelector('.score').textContent = score
    }
});