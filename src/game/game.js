function animate() {
  board.draw();

  if (board.pen.animation > 0) {
    requestAnimationFrame(animate);
    board.pen.animation--;
    return;
  }

  if (board.mouse.waiting[0] == true) {
    board.mouse.waiting[1]();
    board.pen.animation = ANIMATION_FRAMES;
    board.mouse.waiting[0] = false;
    animate();
    return;
  }

  if (board.mouse.poppers.length > 0) {
    board.mouse.poppers.forEach((x) => {
      x(board.board);
    });

    board.mouse.poppers = [];
    animate();

    return;
  }
}
animate();

