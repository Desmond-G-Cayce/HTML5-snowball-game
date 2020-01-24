var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");

function getMousePos(e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

var FPS = 60;

var playerColor = Math.random() > 0.5 ? "#654321" : "#f9e4b7"; // randomly picks skin color

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var playerX = 0;
var playerY = 0;
var playerSpeed = 3;

var playerSize = 30;

var keys = {
    up : false,
    down : false,
    left : false,
    right : false
}

document.addEventListener("keydown", function(e){
    switch (e.keyCode) {
        case 87 :
        case 38 :
            keys.up = true;
        break;

        case 65 :
        case 37 :
            keys.left = true;
        break;

        case 83 :
        case 40 :
            keys.down = true;
        break;

        case 68 :
        case 39 :
            keys.right = true;
        break;
    }
})

document.addEventListener("keyup", function(e){
    switch (e.keyCode) {
        case 87 :
        case 38 :
            keys.up = false;
        break;

        case 65 :
        case 37 :
            keys.left = false;
        break;

        case 83 :
        case 40 :
            keys.down = false;
        break;

        case 68 :
        case 39 :
            keys.right = false;
        break;
    }
})


var Snowball = function(x, y, velocity, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.size = size;
};

Snowball.prototype.render = function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

Snowball.prototype.update = function() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
}











var render = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = playerColor;
    ctx.strokeStyle = "#000000";

    ctx.beginPath();

    ctx.arc(playerX, playerY, playerSize, 0, 2 * Math.PI);

    ctx.fill();
    ctx.stroke();
    
}

var update = function() {
    render();
    if(keys.down) {
        playerY += playerSpeed;
    }
    if(keys.right) {
        playerX += playerSpeed;
    }
    if(keys.left) {
        playerX -= playerSpeed;
    }
    if(keys.up) {
        playerY -= playerSpeed;
    }
};





var startGame = function() {
    setInterval(update, 1000/FPS);
};

