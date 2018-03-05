var Word = require("./Word.js");
var Letter = require("./Letter.js");
var inquirer = require("inquirer");
var wordList =["blues", "folk", "rock", "bluegrass", "jazz", "reggae", "country", "gospel", "soul"];
var randomWord = wordList[Math.floor(Math.random()* wordList.length)];
console.log(randomWord);
var count=0;
var currWord = new Word(randomWord);
currWord.generateWord();

var enterLetter = function() {
  //&& currentLetters.length != randomWord.length
  // console.log(currentLetters.length);
  // console.log(randomWord.length);
  if (count < 12 ) {
    console.log("\n");
  inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "You are guessing genres of music. Please enter a letter."
    }
  ]).then(function(answers) {
    count++;
    currWord.checkWord(answers.letter);
    currWord.displayWord(); 
  //  console.log(generatedWord);
   
    enterLetter();   

  });
  } 

}
  enterLetter();
