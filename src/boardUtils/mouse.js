class Mouse {
  constructor() {
    this.boardPosition = { x: 0, y: 0 };
    this.down = false;
  }

  init(deltaX, deltaY, unit, rows, cols) {
    document.addEventListener("mousemove", (e) => {
      // the lazy destructuring (I have no clue why i wanted to do this)
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

      this.boardPosition = { x, y };
    });

    document.addEventListener("mousedown", () => {
      this.down = true;
    });

    document.addEventListener("mouseup", () => {
      this.down = false;
    })

    document.addEventListener("onclick", () => {

    })
  }
}

