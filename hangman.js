// -------------------- Requirements --------------------
var inquirer = require('inquirer');
var randomWord = require('random-word');
var Word = require('./word.js');


// -------------------- Variables --------------------
var currentWord = new Word(randomWord());

// -------------------- Functions --------------------
var guessLetter = function() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Guess a letter!',
    }
  ])
  .then(function (guess) {
    currentWord.checkLetter(guess);
    var isWin = currentWord.checkGameStatus();

    if (isWin) {
      console.log('-----------------------------');
      console.log('           You Win!          ');
      console.log('-----------------------------');
      console.log(' ');

      return playAgain();
    }
    else if (currentWord.counter > 0) {
      guessLetter();
    }
    else {
      console.log('-----------------------------');
      console.log('You Lost :(');
      console.log('');
      console.log('The correct word was:');
      console.log(currentWord.word);
      console.log('-----------------------------');
      console.log(' ');

      return playAgain();

    }
  });
};

var playAgain = function() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'playAgain',
      message: 'Would you like to play again?',
    }
  ])
  .then(function (answer) {

    if (answer.playAgain) {
      currentWord = new Word(randomWord());
      currentWord.parseWord();
      currentWord.updateDisplay();
      console.log(' ');
      console.log('-----------------------------');
      console.log('     Welcome to Hangman!     ');
      console.log('-----------------------------');
      console.log(' ');
      console.log('Current Word:');
      console.log(currentWord.display);
      console.log(' ');

      guessLetter();
    };
  });
};


// -------------------- Game Logic --------------------
currentWord.parseWord();
currentWord.updateDisplay();

console.log(' ');
console.log('-----------------------------');
console.log('     Welcome to Hangman!     ');
console.log('-----------------------------');
console.log(' ');
console.log('Current Word:');
console.log(currentWord.display);
console.log(' ');

guessLetter();