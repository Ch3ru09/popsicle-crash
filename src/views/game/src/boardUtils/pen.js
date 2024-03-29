class Pen {
  constructor(unit) {
    this.squareSide = unit;
    this.radius = 20;

    this.moving = [];
    this.animation = 0;

    this.initialFallAnimation = FALL_ANIMATION_FRAMES;
  }

  drawSquare(rows, cols) {
    ctx.save();
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.rect(0, 0, this.squareSide * cols, this.squareSide * rows);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();

    return this;
  }

  drawPopsicles(board, dy) {
    if (this.initialFallAnimation > 0) {
      ctx.translate(
        0,
        -this.squareSide * (board[0].length + 5) * easeInOut(this.initialFallAnimation / FALL_ANIMATION_FRAMES)
      );
    }

    board.forEach((col, i) => {
      col.forEach((candy, j) => {
        ctx.save();
        ctx.fillStyle = candies.getDisplayColor(candy);

        const dyCandy =
          j * this.squareSide -
          this.squareSide * (board[0].length + 5) * easeInOut(this.initialFallAnimation / FALL_ANIMATION_FRAMES);

        if (dyCandy < 0 - this.squareSide / 4) return;

        ctx.translate(i * this.squareSide, j * this.squareSide);
        ctx.beginPath();

        let x = this.squareSide / 2;
        let y = this.squareSide / 2;

        [x, y] = this.checkMoving(x, y, i, j);

        ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      });
    });
    if (this.initialFallAnimation > 0) {
      ctx.translate(
        0,
        this.squareSide * (board[0].length + 5) * easeInOut(this.initialFallAnimation / FALL_ANIMATION_FRAMES)
      );
    }
  }

  checkMoving(x, y, i, j) {
    if (this.moving.length < 1) return [x, y];
    if (!this.moving.includes(JSON.stringify([i, j]))) return [x, y];

    let index = this.moving.indexOf(JSON.stringify([i, j]));
    let other = (index + 1) % 2;

    other = JSON.parse(this.moving[other]);

    let res = [
      x + ((i - other[0]) * -1 * this.squareSide * this.animation) / ANIMATION_FRAMES,
      y + ((j - other[1]) * -1 * this.squareSide * this.animation) / ANIMATION_FRAMES,
    ];

    return res;
  }

  getDelta() {}
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

