// init object
let possibleWords = [

  {
    img: 'not-zelda.png',
    answer: "link",
    statement: "His name is Link!",
    sound: "assets/sounds/OOT_YoungLink_StrongAttack2.wav"
  },

  {
    img: "zelda.png",
    answer: "zelda",
    statement: "She's Zelda!",
    sound: ""
  },

  {
    img: "navi.jpg",
    answer: "navi",
    statement: "Hello!?",
    sound: ""
  },

  {
    img: "master-sword.png",
    answer: "the master sword",
    statement: "The Blade of Evil's Bane",
    sound: ""
  },

  {
    img: "rupees.jpg",
    answer: "rupees",
    statement: "Money! Money! Money!",
    sound: ""
  },

  {
    img: "epona.png",
    answer: "epona",
    statement: "Link's trusty steed",
    sound: ""
  },

  {
    img: "goron.png",
    answer: "goron",
    statement: "These dude's eat rocks!",
    sound: ""
  },

  {
    img: "zora.png",
    answer: "zora",
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

document.addEventListener('keypress', event => {
  let keyName = event.key.toLowerCase();

  if (gameState.started) {
    handleGuess(keyName);
  } else {
    startGame();
  }
});

const handleGuess = keyName => {
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

const addSpaces = s => {
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
    newStr += s.charAt(i);
    newStr += String.fromCharCode(160);
  }

  return newStr;
}

const correctGuess = (keyName) => {
  let newDisplay = '';
  let word = possibleWords[gameState.round].answer;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === keyName) {
      newDisplay += keyName;
    } else {
      newDisplay += gameState.displayString.charAt(i);
    }
  }
  gameState.displayString = newDisplay;
}

const wrongGuess = keyName => {
  gameState.letterGuessed += keyName;
  gameState.remainingGuesses--;
}

const gameOver = () => {
  // win
  if (gameState.displayString.indexOf('_') < 0) {
    console.log('You win!');

    document.getElementById('answer').innerHTML = possibleWords[gameState.round].answer;

    document.getElementById('img').innerhtml = "<p class='img' src='assets/images/" +
    possibleWords[gameState.round].img + "' alt='" +
    possibleWords[gameState.round].statement + "'>";

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

const initDisplay = answer => {
  let displayText = '';

  for (let i = 0; i < answer.length; i++) {
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