class GameBoard {
  constructor(rows, cols) {
    this.board = [];
    this.rows = rows;
    this.cols = cols;
    this.unit = 60


    this.pen = new Pen(this.unit);
    this.check = new CheckClears()
  }

  init() {
    for (let i = 0; i < this.cols; i++) {
      this.board.push(Array(this.rows).fill(0).map(() => randomInt(1, NB_CANDIES)));
    }


    this.board = Object.seal(this.board);
    this.check.all(this.board)

    return this;
  }

  draw() {
    ctx.translate((W - this.cols * this.unit) / 2, (H - this.rows * this.unit) / 2);

    this.pen
      .drawSquares(this.rows, this.cols)
      .drawPopsicles(this.board);

    ctx.translate(-(W - this.cols * this.unit) / 2, -(H - this.rows * this.unit) / 2);
  }
}

