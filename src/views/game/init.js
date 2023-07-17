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
const FALL_ANIMATION_FRAMES = 35;

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

function easeInOut(t) {
  const i = {
    x: (1 - t) * (t * t) + t * ((1 - t) * t + t * (1 - t + t)),
    y: (1 - t) * ((1 - t) * t + t * (1 - t)) + t * ((1 - t) * (1 - t) + t * t),
  };
  return i.x;
}

