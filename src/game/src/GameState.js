class GameState {
  constructor() {
    this.moving = false;
  }

  update() {
    this.moving = !this.moving;
  }
}
