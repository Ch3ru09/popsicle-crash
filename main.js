function animate() {
  board.draw();

  if (board.pen.animation > 0) {
    console.log("a");
    requestAnimationFrame(animate);
    board.pen.animation--;
  }
}
animate();

