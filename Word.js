var Letter = require("./Letter.js");

function Word(currentWord) {
  this.currentWord = currentWord;
  this.currentLetters = [];
  this.allLettersGuessed = false;
  this.guessedValues = [];

  this.generateWord = function() {
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
    }
  }

  this.checkLetters = function() {
    var check = this.currentLetters;
    // var check2 = this.guessedValues;
    var that = this;
      check.forEach(function(letter){
        if (letter.correctGuess) {
        that.guessedValues.push(letter.correctGuess);
       }
     })
    // all the letters are guessed when this ^ . length == current letters . length
    // console.log(check2);
    //   if (letter.correctGuess.length === currentLetters.length) {
    //     console.log("You guessed it! Game Over.");
    //     this.allLettersGuessed = true;
    //     return true;
    //   } else {
    //     console.log("Keep Guessing.")
    //     return false;
    //   }
    };
  }

module.exports = Word;
// Saving for testing purposes
// var jazz = new Word("jazz");
// jazz.generateWord();
// jazz.displayWord();
// jazz.checkWord("j");
// jazz.checkWord("z");
// jazz.checkWord("c");
// console.log(jazz);