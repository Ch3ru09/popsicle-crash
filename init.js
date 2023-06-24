const canvas = document.createElement("canvas");
const H = (canvas.height = innerHeight);
const W = (canvas.width = innerWidth);
canvas.classList.add("center");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");


// Constants:
const NB_CANDIES = 6