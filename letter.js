var Letter = function (letter) {
  this.letter = letter;
  this.isGuessed = false;
  this.display = '';

  this.updateDisplay = function() {
    if (this.letter === ' ') {
      this.display = ' ';
      this.isGuessed = true;
    }
    else if (this.isGuessed) {
      this.display = this.letter;
    }
    else {
      this.display = '_';
    };
  };
};


module.exports = Letter;