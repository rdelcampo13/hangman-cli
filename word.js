var Letter = require('./letter.js')

var Word = function (word) {
  this.word = word;
  this.counter = 10;
  this.letters = [];
  this.display = '';

  this.parseWord = function() {
    for (var i = 0; i < this.word.length; i++) {
      var currentLetter = new Letter(this.word[i]);
      currentLetter.updateDisplay();
      this.letters.push(currentLetter);
    };
  };

  this.updateDisplay = function() {
    this.display = '';
    for (var i = 0; i < this.letters.length; i++) {
      this.display += this.letters[i].display + ' ';
    };
  };

  this.checkLetter = function(guess) {
    this.counter--;

    for (var i = 0; i < this.letters.length; i++) {
      if (guess.letter.toLowerCase() === this.letters[i].letter.toLowerCase()) {
        this.letters[i].isGuessed = true;
        this.letters[i].updateDisplay();
      };
    };

    this.updateDisplay();

    console.log('');
    console.log(this.display);
    console.log('');
  };

  this.checkGameStatus = function() {
    var isWin = true;
    for (var i = 0; i < this.letters.length; i++) {
      if (!this.letters[i].isGuessed) {
        isWin = false;
      };
    };
    return isWin;
  };
};


module.exports = Word;