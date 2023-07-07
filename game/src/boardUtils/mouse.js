class Mouse {
  constructor() {
    this.boardPosition = [-1, -1];
    this.down = null;
    this.clicked = null;
    this.pulling = false;
    this.waiting = [false, () => {}];
    this.poppers = [];
  }

  init(deltaX, deltaY, unit, rows, cols, board, checkCandy, pop, pen) {
    const utils = { board, pen, checkCandy, pop };

    document.addEventListener("mousemove", (e) => {
      let { clientX: x, clientY: y } = e;
      x -= deltaX;
      y -= deltaY;

      x = Math.floor(x / unit);
      y = Math.floor(y / unit);

      if (x < 0 || y < 0) {
        x = y = -1;
      }
      if (x >= cols || y >= rows) {
        x = y = -1;
      }

      this.boardPosition = [x, y];

      if (this.down == null) return;

      if (JSON.stringify(this.down) !== JSON.stringify(this.boardPosition)) {
        this.clicked = null;
        this.pulling = true;
        console.log(this.down, this.boardPosition);
      }
    });

    document.addEventListener("mousedown", () => {
      if (this.boardPosition.includes(-1)) {
        this.down = null;
        return;
      }

      this.down = this.boardPosition;
      console.log(this.down);
    });

    document.addEventListener("mouseup", () => {
      if (this.pulling == true) {
        this.clicked = null;
      }

      this.down = null;
    });

    document.addEventListener("click", () => {
      if (this.clicked == null) {
        this.clicked = this.boardPosition;
        return;
      }
      if (JSON.stringify(this.clicked) == JSON.stringify(this.boardPosition)) {
        this.clicked = null;
        return;
      }
      // initial x and initial y
      let [ix, iy] = this.clicked;

      let [fx, fy] = this.boardPosition;

      this.checker(ix, iy, fx, fy, utils);
    });

    return this;
  }

  checker(ix, iy, fx, fy, { board, pen, checkCandy, pop }) {
    let dx = Math.abs(fx - ix);
    let dy = Math.abs(fy - iy);

    if ((dx == 1 && dy == 0) || (dx == 0 && dy == 1)) {
      [board[ix][iy], board[fx][fy]] = [board[fx][fy], board[ix][iy]];
      pen.moving = [JSON.stringify([ix, iy]), JSON.stringify([fx, fy])];

      pen.animation = ANIMATION_FRAMES;
      animate(board);
    } else {
      this.clicked = [fx, fy];
      return;
    }

    let check = [];
    for (let x of [
      [ix, iy],
      [fx, fy],
    ]) {
      let [checkCol, checkRow] = checkCandy(x[0], x[1], board);
      let connected = 1;

      let longer = checkCol.length > checkRow.length ? checkCol : checkRow;
      let other = checkCol.length <= checkRow.length ? checkCol : checkRow;

      connected += checkCol.length > checkRow.length ? checkCol.length : checkRow.length;
      if (other.includes(2) || other.includes(-2)) {
      }

      if (checkCol.length > 1) {
        check.push([...x, 0, checkCol, connected]);
      }
      if (checkRow.length > 1) {
        check.push([...x, 1, checkRow, connected]);
      }
    }

    this.clicked = null;
    if (check.length < 1) {
      this.waiting = [
        true,
        () => {
          [board[ix][iy], board[fx][fy]] = [board[fx][fy], board[ix][iy]];
        },
      ];

      return;
    }

    this.poppers.push(() => {
      check.forEach((x) => {
        pop(...x);
      });
    });
  }
}

