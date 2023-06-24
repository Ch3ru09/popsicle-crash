class GameCandies {
  constructor() {
    this.colors = ["red", "orange", "yellow", "green", "blue", "purple"]
  }

  getColorId(piece) {
    return piece & 7
  }

  getDisplayColor(piece) {
    return this.colors[(piece & 7) - 1]
  }
}