class GameBoard {
  constructor(rows, cols) {
    this.board = [];
    this.rows = rows;
    this.cols = cols;
    this.unit = Math.min(H / rows / (3 / 2), 60);

    this.deltaX = (W - this.cols * this.unit) / 2;
    this.deltaY = (H - this.rows * this.unit) / 2;

    this.pen = new Pen(this.unit);
    this.check = new Checker();
    this.clearer = new Clearer();
    this.mouse = new Mouse().init(
      this.deltaX,
      this.deltaY,
      this.unit,
      rows,
      cols,
      this.board,
      this.check.checkCandy,
      this.clearer.pop.bind(this.clearer),
      this.pen
    );
  }

  resize() {
    this.unit = Math.min(H / this.rows / (3 / 2), 60);

    this.deltaX = (W - this.cols * this.unit) / 2;
    this.deltaY = (H - this.rows * this.unit) / 2;

    return this;
  }

  init() {
    for (let i = 0; i < this.cols; i++) {
      this.board.push(
        Array(this.rows)
          .fill(0)
          .map(() => randomInt(1, NB_CANDIES))
      );
    }

    this.board = Object.seal(this.board);
    this.check.all(this.board);

    return this;
  }

  draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.translate(this.deltaX, this.deltaY);

    this.pen.drawSquare(this.rows, this.cols).drawPopsicles(this.board, this.deltaY);

    ctx.translate(-this.deltaX, -this.deltaY);
  }
}

