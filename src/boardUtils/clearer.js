class Clearer {
  pop(col, row, direction, delta, connected) {
    // direction 0: col, 1: row

    board.board[col][row] = 0;
    board.board[col].splice(row, 1);
    this.repopulate(col);

    let max = Math.max(delta.at(-1), 0);

    delta.forEach((check) => {
      let currentCol = col + (direction == 0 ? check : 0);
      let currentRow = row + (direction == 1 ? max : 0);
      board.board[currentCol].splice(currentRow, 1);
      this.repopulate(currentCol);
    });
  }

  repopulate(col) {
    board.board[col].splice(0, 0, randomInt(1, NB_CANDIES));
  }
}

