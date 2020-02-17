function createGame(gameName) {
  let score = 0;
  return function win() {
    score++; 
    return `Your ${gameName} score is ${score}: `;
  }
}