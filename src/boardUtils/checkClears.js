class CheckClears {
  checkCandy(col, row, board) {
    const checkCol = []
    const checkRow = []
    const current = candies.getColorId(board[col][row])

    for (let i of [-1, 1]) {
      if (col + i >= 0 && col + i < board.length) {
        if (current == candies.getColorId(board[col + i][row])) {
          checkCol.push(i)

          if (col + i * 2 >= 0 && col + i * 2 < board.length) {
            if (current == candies.getColorId(board[col + i * 2][row])) {
              checkRow.push(i * 2)
            }
          }
        }
      }

      if (row + i >= 0 && row + i < board[0].length) {
        if (current == candies.getColorId(board[col][row + i])) {
          checkRow.push(i)


          if (row + i * 2 >= 0 && row + i * 2 < board[0].length) {
            if (current == candies.getColorId(board[col][row + i * 2])) {
              checkRow.push(i * 2)
            }
          }
        }
      }
    }

    if (checkCol.includes(1) && checkCol.includes(-1)) {
      return true
    }
    if (checkRow.includes(1) && checkRow.includes(-1)) {
      return true
    }

    return false
  }

  all(board) {
    let check = 0
    board.forEach((x, col) => {
      x.forEach((_, row) => {
        if (this.checkCandy(col, row, board)) {
          check++
          board[col][row] = (board[col][row] - 1) ^ 7
        }
      })
    });
    if (check > 0) {
      this.all(board)
    }
  }
}