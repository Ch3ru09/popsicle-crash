class GameCandies {
  constructor() {
    this.colors = ["red", "orange", "yellow", "green", "blue", "purple"]
  }

  getColorId(candy) {
    return candy & 7
  }

  getDisplayColor(candy) {
    return this.colors[(candy & 7) - 1]
  }
}