const candies = new GameCandies();
const state = new GameState();
const board = new GameBoard(5, 5).init();

function animate() {
  board.draw();

  // requestAnimationFrame(animate);
}
animate();

