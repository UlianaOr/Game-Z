const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 1)) * box,
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener("keydown",direction);

let dir;

function direction(event) {
    if (event.keyCode == 37)
    dir = "left";
    else if (event.keyCode == 38)
    dir = "up";

}

function drawGame() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake [i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.5);
}


let game = setInterval(drawGame, 100);