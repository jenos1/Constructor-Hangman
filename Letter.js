var inquirer = require("inquirer");

// constructor function used to create letter objects
function Letter(character){
  this.character = character;
  this.correctGuess = false;
}

// method to return letter guessed
Letter.prototype.displayChar = function() {
  if (this.correctGuess === true) {
    console.log("\n", "\x1b[31m", "Good guess, keep going!", "\x1b[0m", "\n");
    return this.character;
  } else {
    return "_";
  } 
 }
// method to check letter guessed.
 Letter.prototype.checkChar = function(inputChar) {
  if(this.character.toLowerCase() === inputChar.toLowerCase()) {
    this.correctGuess = true;
  } 
 }

module.exports = Letter;
// var test = new Letter("K");
// console.log(test);
// test.checkChar("j");
// var output = test.displayChar();
// console.log(output);