class Pen {
  constructor(unit) {
    this.squareSide = unit;
    this.radius = 20;

    this.moving = [];
    this.animation = 0;
  }

  drawSquares(rows, cols) {
    ctx.save();
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        ctx.rect(i * this.squareSide, j * this.squareSide, this.squareSide, this.squareSide);
        ctx.stroke();
      }
    }

    ctx.restore();

    return this;
  }

  drawPopsicles(board) {
    board.forEach((col, i) => {
      col.forEach((candy, j) => {
        ctx.save();
        ctx.fillStyle = candies.getDisplayColor(candy);
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
  }

  checkMoving(x, y, i, j) {
    if (this.moving.length < 1) return [x, y];
    if (!this.moving.includes(JSON.stringify([i, j]))) return [x, y];

    let index = this.moving.indexOf(JSON.stringify([i, j]));
    let other = (index + 1) % 2;

    other = JSON.parse(this.moving[other]);

    this.animation = 0;

    let res = [x + ((i - other[0]) * -1 * this.squareSide * this.animation) / ANIMATION_FRAMES, y + ((j - other[1]) * -1 * this.squareSide * this.animation) / ANIMATION_FRAMES];

    console.log(res);

    return res;
  }
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

