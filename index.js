var Word = require("./Word.js");
// var Letter = require("./Letter.js");
var inquirer = require("inquirer");
var wordList =["blues", "folk", "rock", "bluegrass", "jazz", "reggae", "country", "gospel", "soul"];
var randomWord = wordList[Math.floor(Math.random()* wordList.length)];
console.log(randomWord);
var count=0;

var enterLetter = function() {
  var currWord = new Word(randomWord);
  console.log(currWord);  
  if (count < 12) {
    console.log("Keep guessing genres of music.")
  inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Please enter a letter."
    }
  ]).then(function(answers) {
  // console.log(checkWord(answers.letter));
  console.log(answers.letter);
    count++;
    enterLetter();

    currWord.generateWord();
    currWord.displayWord(answers.letter);
  });
  }
}
  enterLetter();
