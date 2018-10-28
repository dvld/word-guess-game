// init hangmanGame object
var possibleWords = [

    {
      img: "not-zelda.jpg",
      answer: "Link",
      statement: "His name is Link!",
      sound:""
    },

    {
      img: "zelda.png",
      answer: "Zelda",
      statement: "She's Zelda!",
      sound:""
    },

    navi: {
      img: "navi.jpg",
      answer: "Navi",
      statement: "Hello!?",
      sound:""
    },

    masterSword: {
      img: "master-sword.png",
      answer: "The Master Sword",
      statement: "The Blade of Evil's Bane",
      sound:""
    },

    rupees: {
      img: "rupees.jpg",
      answer: "Rupees",
      statement: "Money! Money! Money!",
      sound:""
    },

    epona: {
      img: "epona.png",
      answer: "Epona",
      statement: "Link's trusty steed",
      sound:""
    },

    goron: {
      img: "goron.png",
      answer: "Goron",
      statement: "These dude's eat rocks!",
      sound:""
    },

    zora: {
      img: "zora.png",
      answer: "Zora",
      statement: "Royal fish people",
      sound:""
    },

  }
]

var gameSetup = {
  
}














//   // init state variables

//   possiy: null,
//   lettersOfTheWord: [],
//   matchedLetters: [],
//   guessedLetters: [],
//   guessesLeft: 0,
//   totalGuesses: 0,
//   letterGuessed: null,
//   wins: 0,

//   // setup game method called on page load
//   setupGame: function () {
//     // picks a random word
//     var objKeys = Object.keys(this.wordsToPick);
//     this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

//     // splits word into individual letters
//     this.lettersOfTheWord = this.wordInPlay.split("");

//     // hidden word representation / letters yet to be guessed appear as underscores ("_ _ _ _")
//     this.rebuildWordView();

//     // sets number of guesses and renders to html
//     this.processUpdateTotalGuesses();
//   },

//   // when user guesses a letter
//   updatePage: function (letter) {
//     // if no guesses left, restart game
//     if (this.guessesLeft === 0) {
//       this.restartGame();
//     } else {
//       // check for incorrect guesses
//       this.updateGuesses(letter);

//       // check for correct guesses
//       this.updateMatchedLetters(letter);

//       // reveal correct guesses
//       this.rebuildWordView();

//       // if user wins, restart game
//       if (this.updateWins() === true) {
//         this.restartGame();
//       }
//     }
//   },

//   // function for incorrect guesses
//   updateGuesses: function (letter) {
//     // if letter is not in guessedLetters or lettersOfTheWord
//     if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
//       // add to guessedLetters
//       this.guessedLetters.push(letter);

//       // decrease guesses
//       this.guessesLeft--;

//       // update guessesLeft and guessedLetters
//       document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
//       document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
//     }
//   },

//   // sets the init number of guesses
//   processUpdateTotalGuesses: function () {
//     // gives the user more guesses the longer the word is
//     this.totalGuesses = this.lettersOfTheWord.length + 5;
//     this.guessesLeft = this.totalGuesses;

//     // render guesses left to page
//     document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
//   },

//   // function for correct guesses
//   updateMatchedLetters: function (letter) {
//     // loop through letters of answer
//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       // if letter is in answer and hasn't been guessed
//       if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
//         // push guessed letter to matchedLetters
//         this.matchedLetters.push(letter);
//       }
//     }
//   },

//   // function for hidden word display
//   rebuildWordView: function () {
//     var wordView = "";

//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       // if guessed letter is correct, display the letter
//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
//         wordView += this.lettersOfTheWord[i];

//         // if letter hasn't been guessed, display "_"
//       } else {
//         wordView += "&nbsp;_&nbsp;";
//       }
//     }

//     // update the page with new string
//     document.querySelector("#current-word").innerHTML = wordView;
//   },

//   // function to restart game
//   restartGame: function() {
//     document.querySelector("#guessed-letters").innerHTML = "";
//     this.wordInPlay = null;
//     this.lettersOfTheWord = [];
//     this.matchedLetters = [];
//     this.guessedLetters = [];
//     this.guessesLeft = 0;
//     this.totalGuesses = 0;
//     this.letterGuessed = null;
//     this.setupGame();
//     this.rebuildWordView();
//   },

//   // function to see if user has won
//   updateWins: function() {
//     var win;

//     // if user hasn't guessed word, set win to false
//     if (this.matchedLetters.length === 0) {
//       win = false;
//     } else {
//       win = true;
//     }

//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
//         win = false;
//       }
//     }

//     // if win is true
//     if (win) {
//       // increment wins
//       this.wins = this.wins + 1;

//       // update wins on the page
//       document.querySelector("#wins").innerHTML = this.wins;

//       // update answer text and image
//       document.querySelector("#game-image").innerHTML = this.wordsToPick[this.wordInPlay].answer + ": " + this.wordInPlay;
//       document.querySelector("#game-div").innerHTML = "<img class='game-image' src='assets/images/" + this.wordsToPick[this.wordInPlay].picture + "' alt='" + this.wordsToPick[this.wordInPlay].answer + "'>";

//       // return true to start game
//       return true;
//     }
//     // if win is false
//     return false;
//   }
// };

// // init game when page loads
// hangmanGame.setupGame();

// // when a key is pressed
// document.onkeyup = function(event) {
//   // capture key and make it lowercase
//   hangmanGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
//   // pass guessed letter into updatePage function to run logic
//   hangmanGame.updatePage(hangmanGame.letterGuessed);
// };