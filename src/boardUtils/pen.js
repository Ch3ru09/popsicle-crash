class Pen {
  constructor(unit) {
    this.squareSide = unit;
    this.radius = 10
  }

  drawSquares(rows, cols) {
    ctx.save();
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;

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
        ctx.save()
        ctx.fillStyle = candies.getDisplayColor(candy)
        ctx.translate(i * this.squareSide, j * this.squareSide)
        ctx.arc(this.squareSide / 2 - this.radius, this.squareSide / 2, this.radius, 0, Math.PI * 2, false)
        ctx.fill()

        ctx.restore()
      })
    });
  }
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}