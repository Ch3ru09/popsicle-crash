const canvas = document.createElement("canvas");
let H = (canvas.height = innerHeight);
let W = (canvas.width = innerWidth);
canvas.classList.add("center");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Constants
const NB_CANDIES = 6;
const ANIMATION_FRAMES = 10;

// Classes
const candies = new GameCandies();
const state = new GameState();
const board = new GameBoard(10, 10).init();

// Utils
window.addEventListener(
  "resize",
  () => {
    H = canvas.height = innerHeight;
    W = canvas.width = innerWidth;

    board.resize().draw();
  },
  false
);

