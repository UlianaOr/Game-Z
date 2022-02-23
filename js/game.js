const canvas = document.getElementById("game");
const ctx = canvas.getCotext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const food = new Image();
food.src = "img/food.png";

let box = 32;

let score = 0;

function drowGame() {
    ctx.drawImage(ground, 0, 0);
}