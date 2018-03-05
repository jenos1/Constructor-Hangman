var Letter = require("./Letter.js");

function Word(currentWord) {
  this.currentWord = currentWord;
  this.currentLetters = [];

  this.generateWord = function () {
    for (var i = 0; i < this.currentWord.length; i++) {
      this.currentLetters.push(new Letter(this.currentWord[i]));
    }
  };

  this.displayWord = function() {
    var output = "";
    for (var i = 0; i < this.currentLetters.length; i++) {
      output += " " + " " + this.currentLetters[i].displayChar() + " ";
    }
    console.log(output);
    return output;
  }

  this.checkWord = function (letterGuess) {
    for (var i = 0; i < this.currentLetters.length; i++){
      this.currentLetters[i].checkChar(letterGuess);
    
      // console.log(this.currentLetters[i].checkChar);
      // console.log(letterGuess);
      // console.log(i);
    }
  }
}
module.exports = Word;
// For testing only
// var jazz = new Word("jazz");
// jazz.generateWord();
// jazz.displayWord();
// jazz.checkWord("j");
// jazz.checkWord("z");
// jazz.checkWord("c");
// jazz.displayWord();

// console.log(displayedWord);
// console.log(jazz);
