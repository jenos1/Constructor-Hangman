var inquirer = require("inquirer");

// constructor function used to create letter objects
function Letter(character){
  this.character = character;
  this.correctGuess = false;
}

// method to return letter guessed
Letter.prototype.displayChar = function() {
  if (this.correctGuess === true) {
    console.log("Good guess, keep going!");
    return this.character;
  } else {
    console.log("Keep guessing.");
    return "_";
  }
 }
// method to check letter guessed.
 Letter.prototype.checkChar = function(inputChar) {
  if(this.character.toLowerCase() === inputChar.toLowerCase()) {
    this.correctGuess = true;
  }
 }

// module.exports = Letter;
// var test = new Letter("K");
// console.log(test);
// test.checkChar("j");
// var output = test.displayChar();
// console.log(output);