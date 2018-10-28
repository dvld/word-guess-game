// init object
let possibleWords = [

  

    {
      img: 'not-zelda.jpg',
      answer: "Link",
      statement: "His name is Link!",
      sound: "assets/sounds/OOT_YoungLink_StrongAttack2.wav"
    },

    {
      img: "zelda.png",
      answer: "Zelda",
      statement: "She's Zelda!",
      sound: ""
    },

    {
      img: "navi.jpg",
      answer: "Navi",
      statement: "Hello!?",
      sound: ""
    },

    {
      img: "master-sword.png",
      answer: "The Master Sword",
      statement: "The Blade of Evil's Bane",
      sound: ""
    },

    {
      img: "rupees.jpg",
      answer: "Rupees",
      statement: "Money! Money! Money!",
      sound: ""
    },

    {
      img: "epona.png",
      answer: "Epona",
      statement: "Link's trusty steed",
      sound: ""
    },

    {
      img: "goron.png",
      answer: "Goron",
      statement: "These dude's eat rocks!",
      sound: ""
    },

    {
      img: "zora.png",
      answer: "Zora",
      statement: "Royal fish people",
      sound: ""
    }
  
  ];


let gameState = {
  started: false,
  round: 0,
  displayString: '',
  letterGuessed: '',
  remainingGuesses: 0,
  wins: 0
};

let missesAllowed = 9;

// _________________________________________

document.addEventListener('keypress', (event) => {
  let keyName = event.key.toUpperCase();

  if (gameState.started) {
    handleGuess(keyName);
  } else {
    startGame();
  }
});

const handleGuess = (keyName) => {
  if (
    gameState.letterGuessed.indexOf(keyName) >= 0
    ||
    gameState.displayString.indexOf(keyName) >= 0) {
    return;
  }

  let charIndex = possibleWords[gameState.round].answer.indexOf(keyName);
  if (charIndex >= 0) {
    correctGuess(keyName);
  } else {
    wrongGuess(keyName);
  }

  updateState();

  gameOver();
};

const updateState = () => {
  document.getElementById('word').textContent = addSpaces(gameState.displayString);

  document.getElementById('remainingGuesses').textContent = gameState.remainingGuesses;
  
  document.getElementById('lettersGuessed').textContent = addSpaces(gameState.letterGuessed);

  document.getElementById('wins').textcontent = gameState.wins + ' / ' + gameState.round;
};

const addSpaces = (s) => {
  let newStr = ''
  for (i = 0; i < s.length; i++) {
    newStr += s.charAt(i);
    newStr += String.fromCharCode(160);
  }

  return newStr;
}

const correctGuess = (keyName) => {
  let newDisplay = '';
  let word = possibleWords[gameState.round].answer;

  for (i = 0; i < (word.length); i++) {
    if (word.charAt(i) === keyName) {
      newDisplay += keyName;
    } else {
      newDisplay += gameState.displayString.charAt(i);
    }
  }
  gameState.displayString = newDisplay;
}

const wrongGuess = (keyName) => {
  gameState.letterGuessed += keyName;
  gameState.remainingGuesses--;
}

const gameOver = () => {
  // win
  if (gameState.displayString.indexOf('_') < 0) {
    console.log('You win!');

    document.getElementById('answer' + gameState.round).innerHTML = possibleWords[gameState.round].answer;

    document.getElementById('img').src = possibleWords[gameState.round].img;

    gameState.round++;
    gameState.wins++;
    initializeGame();

    // loss
  } else if (
    gameState.letterGuessed.length === missesAllowed
  ) {
    alert('Nice Try!, the answer was: ' + possibleWords[gameState.round].answer);
    gameState.round++;
    initializeGame();
  }
}

const startGame = () => {
  initializeGame();
  document.getElementById('pressStart').textContent = '';
}

const initializeGame = () => {
  let newWord = possibleWords[gameState.round].answer;

  gameState.started = true;

  gameState.displayString = initDisplay(newWord);

  gameState.remainingGuesses = guessesAllowed(newWord);

  gameState.letterGuessed = '';

  updateState();
}

const initDisplay = (answer) => {
  let displayText = '';

  for (i = 0; i < answer.length; i++) {
    if (answer.charAt(i) == ' ') {
      displayText += ' ';
    } else {
      displayText += '_';
    }
  }

  return displayText;
}

const guessesAllowed = () => {
  return missesAllowed;
};