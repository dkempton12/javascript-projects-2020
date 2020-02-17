function createGame(gameName) {
  let score = 0;
  return function win() {
    score++; 
    return `Your ${gameName} score is ${score}: `;
  }
}

// Calling the parent-level scope from a child-level (closure)
const hockeyGame = createGame('Hockey');
hockeyGame();

const soccerGame = createGame('Soccer');
soccerGame();