alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',]; 
var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(randomLetter);
var userGuesses=[];
var guessesLeft=9;
document.onkeydown = function(event) {
    guessesLeft--;
  
 //
   var letter = event.key.toLowerCase();
   console.log(letter);
  
  //   // Then add the guess to the guessedLetters array
    userGuesses.push(letter);
    document.getElementById("userGuesses").innerHTML = userGuesses;
  }

 


    


//game logic 
//This will reset the game when called. 
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};