'use strict';

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.message').textContent = `You didn't pick anything!🥺 Pick a number!`
    }
});