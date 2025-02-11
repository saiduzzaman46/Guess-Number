'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (className, message) {
  document.querySelector('.' + className).textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('message', 'No number!');
  } else if (guess === secretNumber) {
    displayMessage('message', 'Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage('number', secretNumber);

    if (score > highscore) {
      highscore = score;
      displayMessage('highscore', highscore);
    }
    document.querySelector('.check').disabled = true;
  } else {
    displayMessage('message', guess > secretNumber ? '📈 Too high' : '📉 Too low');
    if (--score > 0) {
      displayMessage('score', score);
    } else {
      displayMessage('message', 'You lost the game');
      displayMessage('score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('message', 'Start guessing...');
  displayMessage('score', score);
  displayMessage('number', '?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
});

// console.log(secretNumber);
