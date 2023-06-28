function animate() {
  board.draw();

  if (board.pen.animation > 0) {
    requestAnimationFrame(animate);
    board.pen.animation--;
  } else if (board.mouse.waiting[0] == true) {
    board.mouse.waiting[1]();
    board.pen.animation = ANIMATION_FRAMES;
    board.mouse.waiting[0] = false;
    animate();
  }
}
animate();

