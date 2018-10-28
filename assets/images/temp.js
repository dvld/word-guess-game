var anime = [
  {
      title: "NARUTO",
      img: "assets/images/thumb-1920-656738.jpg",
      themeSong: "assets/images/01 Naruto Opening 1 Hound Dog Rocks.mp3"
  },
  {
      title: "BLEACH",
      img: "assets/images/thumb-1920-292877.jpg",
      themeSong: "assets/images/Bleach Opening 1.mp3"
  },
  {
      title: "GINTAMA",
      img: "assets/images/54c15675670ba44c1f98c3e11ba0cddf1515030877_full.jpg",
      themeSong: "assets/images/Gintama Opening 1.mp3"
  },
  {
      title: "MY HERO ACADEMIA",
      img: "assets/images/thumb-1920-859804.png",
      themeSong: "assets/images/My Hero Academia - Official Opening.mp3"
  },
  {
      title: "HUNTER X HUNTER",
      img: "assets/images/thumb-1920-566163.jpg",
      themeSong: "assets/images/Hunter X Hunter Opening 1.mp3"
  },
  {
      title: "ONE PIECE",
      img: "assets/images/thumb-1920-606301.jpg",
      themeSong: "assets/images/One Piece Opening 1 Full Version.mp3"
  },
  {
      title: "FAIRY TAIL",
      img: "assets/images/thumb-1920-748294.jpg",
      themeSong: "assets/images/Fairy Tail Opening 1  Snow Fairy  HD 1080p  Multi Subs .mp3"
  },

  {
      title: "DRAGON BALL Z",
      img: "assets/images/Poster_dragon_ball_z_z_warriors_by_dony910-d5bhg75.jpg",
      themeSong: "assets/images/Dragon Ball Z - 1989 Japanese Opening - Rare HD Quality.mp3"
  },
  {
      title: "TOKYO GHOUL",
      img: "assets/images/thumb-1920-607907.jpg",
      themeSong: "assets/images/Tokyo Ghoul Opening Unravel Full.mp3"
  }
];

var gameState = {
  gameNum: 0,
  lettersGuessed: "",
  gameStarted: false,
  displayString: "",
  remainingGuesses: 0,
  wins: 0
}


var NUM_MISSESS_ALLOWED = 6;


// Functions

document.addEventListener('keypress', (event) => {
  var keyName = event.key.toUpperCase();

  if (gameState.gameStarted) {
      handleGuess(keyName);
  } else {
      startGame();
  }
});

function handleGuess(keyName) {
  // Check if guessed before and return
  if (gameState.lettersGuessed.indexOf(keyName) >= 0 || gameState.displayString.indexOf(keyName) >= 0) {
      beep();
      return;
  }


  var charIndex = anime[gameState.gameNum].title.indexOf(keyName);
  if (charIndex >= 0) {
      processCorrectGuess(keyName);
  } else {
      processWrongGuess(keyName);
  }

  renderGameState();

  checkForGameEnd();
}

function renderGameState() {
  // showGameState();
  document.getElementById("word").textContent = addSpaces(gameState.displayString);


  document.getElementById("raminaingGuesses").textContent = gameState.remainingGuesses;
  document.getElementById("lettersGuessed").textContent = addSpaces(gameState.lettersGuessed);
  document.getElementById("wins").textContent = gameState.wins + " / " + gameState.gameNum;
}

function addSpaces(s) {
  var newStr = ""
  for (i = 0; i < s.length; i++) {
      newStr += s.charAt(i);
      newStr +=String.fromCharCode(160);
  }

  return newStr;
}

function processCorrectGuess(keyName) {
  var newDisplayString = "";
  var title = anime[gameState.gameNum].title;

  for (i = 0; i < (title.length); i++) {
      if (title.charAt(i) == keyName) {
          newDisplayString += keyName;
      }
      else {
          newDisplayString += gameState.displayString.charAt(i);
      }

  }

  gameState.displayString = newDisplayString;

}

function processWrongGuess(keyName) {
  gameState.lettersGuessed += keyName;

  gameState.remainingGuesses--;
}

function checkForGameEnd() {
  if (gameState.displayString.indexOf("_") < 0) //won
  {
      console.log("You win!!! It is " + anime[gameState.gameNum].title);
      document.getElementById("game"+gameState.gameNum).innerHTML =anime[gameState.gameNum].title;
      document.getElementById("place").src=anime[gameState.gameNum].img;
      document.getElementById("myAudio").src=anime[gameState.gameNum].themeSong;
     
      gameState.gameNum++;
      gameState.wins++;
      initializeGame();
     
  }
  else if (gameState.lettersGuessed.length == NUM_MISSESS_ALLOWED) //lost
  {
      alert("NICE TRY!, the ANIME was: " + anime[gameState.gameNum].title);
      gameState.gameNum++;
      initializeGame();
  }

}


function startGame() {
  initializeGame();
  document.getElementById("instructions").textContent = "";
  document.getElementById("myAudio").textContent = "";

}

function initializeGame() {
  // set the blanks on the display for the title
  var title = anime[gameState.gameNum].title;

  gameState.gameStarted = true;
  gameState.displayString = getInitialDisplayText(title);
  gameState.remainingGuesses = getTotalGuessesAllowed(title);
  gameState.lettersGuessed = "";

  renderGameState();
}

function getInitialDisplayText(title) {
  var displayText = "";

  for (i = 0; i < title.length; i++) {
  
      if(title.charAt(i)==" ") {
          displayText+=" ";
      } else {
          displayText += "_";
      }
  }
  

  return displayText;
}

function getTotalGuessesAllowed(title) {
  // var letters = " ";
  // var numDistinct = 0;

  // //find num of letters in title
  // for (i = 0; i < title.length; i++) {
  //     var letter = title.charAt(i);
  //     if (letters.indexOf(letter) < 0) // have not had this letter yet
  //     {
  //         letters += letter;
  //         numDistinct++;
  //     }
  // }

  // return numDistinct + NUM_MISSESS_ALLOWED;
  return NUM_MISSESS_ALLOWED;
}

function beep() {
  (new
      Audio(
          "data:audio/wav;base64,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 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
      )).play();
}




// function showGameState() {
//     alert("display: " + gameState.displayString + " | remaining: " + gameState.remainingGuesses + " | letters guessed: " + gameState.lettersGuessed + " | started: " + gameState.gameStarted);
// }
