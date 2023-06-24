const state = new GameState();
const board = new GameBoard(5, 5).init();
const candies = new GameCandies();

function animate() {
  board.draw();

  // requestAnimationFrame(animate);
}
animate();

