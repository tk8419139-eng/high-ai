<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Escape Protocol: Black Manor</title>

<link rel="stylesheet" href="style.css">
</head>

<body>

<div id="loading">

<h1>ESCAPE PROTOCOL</h1>

<p>BLACK MANOR</p>

<div class="loader"></div>

</div>

<div id="menu">

<h1>ESCAPE PROTOCOL</h1>

<h2>BLACK MANOR</h2>

<button id="play">PLAY</button>

<button id="settings">SETTINGS</button>

<button id="exit">EXIT</button>

</div>

<div id="game">

<canvas id="gameCanvas"></canvas>

</div>

<script src="game.js"></script>

</body>
</html>*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#000;
overflow:hidden;
color:#fff;
}

#loading{
position:fixed;
width:100%;
height:100%;
background:#050505;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:999;
}

.loader{
width:70px;
height:70px;
border:6px solid #333;
border-top:6px solid #00ff99;
border-radius:50%;
animation:spin 1s linear infinite;
margin-top:20px;
}

@keyframes spin{
0%{transform:rotate(0deg);}
100%{transform:rotate(360deg);}
}

#menu{
display:none;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(#050505,#151515);
justify-content:center;
align-items:center;
flex-direction:column;
}

#menu h1{
font-size:48px;
color:#00ff99;
margin-bottom:10px;
text-shadow:0 0 20px #00ff99;
}

#menu h2{
margin-bottom:40px;
color:white;
font-weight:normal;
}

button{
width:220px;
padding:16px;
margin:10px;
border:none;
border-radius:12px;
font-size:20px;
cursor:pointer;
background:#00ff99;
color:#000;
font-weight:bold;
transition:.3s;
}

button:hover{
transform:scale(1.05);
background:#00cc77;
}

#game{
display:none;
width:100vw;
height:100vh;
background:#111;
}

#gameCanvas{
width:100%;
height:100%;
display:block;
    } // Escape Protocol: Black Manor
// PART 3

const loading = document.getElementById("loading");
const menu = document.getElementById("menu");
const game = document.getElementById("game");

const play = document.getElementById("play");
const settings = document.getElementById("settings");
const exit = document.getElementById("exit");

// Loading Screen
setTimeout(() => {
    loading.style.display = "none";
    menu.style.display = "flex";
}, 2500);

// Play Button
play.addEventListener("click", () => {

    menu.style.display = "none";
    game.style.display = "block";

    startGame();

});

// Settings
settings.addEventListener("click", () => {

    alert("Settings will be available in Part 4");

});

// Exit
exit.addEventListener("click", () => {

    alert("Thanks for playing Escape Protocol!");

});

// =========================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

// =========================

const player = {

x:200,
y:200,
size:30,
speed:5,
color:"#00ff99"

};

const keys = {};

// Keyboard

window.addEventListener("keydown",(e)=>{

keys[e.key]=true;

});

window.addEventListener("keyup",(e)=>{

keys[e.key]=false;

});

// =========================

function update(){

if(keys["w"]||keys["ArrowUp"]) player.y-=player.speed;

if(keys["s"]||keys["ArrowDown"]) player.y+=player.speed;

if(keys["a"]||keys["ArrowLeft"]) player.x-=player.speed;

if(keys["d"]||keys["ArrowRight"]) player.x+=player.speed;

}

// =========================

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#222";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle=player.color;

ctx.fillRect(

player.x,

player.y,

player.size,

player.size

);

ctx.fillStyle="white";

ctx.font="20px Arial";

ctx.fillText("Escape Protocol : Black Manor",20,40);

ctx.fillText("Jimmy",player.x-5,player.y-10);

}

// =========================

function loop(){

update();

draw();

requestAnimationFrame(loop);

}

function startGame(){

loop();

} // =========================
// PART 4

// Health System
let health = 100;

// Touch Controls
let touchX = 0;
let touchY = 0;
let touching = false;

canvas.addEventListener("touchstart", (e) => {
    touching = true;
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
});

canvas.addEventListener("touchmove", (e) => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
});

canvas.addEventListener("touchend", () => {
    touching = false;
});

function updateTouch() {
    if (!touching) return;

    if (touchX < canvas.width / 2) player.x -= player.speed;
    if (touchX > canvas.width / 2) player.x += player.speed;

    if (touchY < canvas.height / 2) player.y -= player.speed;
    if (touchY > canvas.height / 2) player.y += player.speed;
}

// पुरानी update() के अंत में यह लाइन जोड़ें:
// updateTouch();

function drawHealth() {
    ctx.fillStyle = "red";
    ctx.fillRect(20, 60, 200, 20);

    ctx.fillStyle = "lime";
    ctx.fillRect(20, 60, health * 2, 20);

    ctx.strokeStyle = "white";
    ctx.strokeRect(20, 60, 200, 20);

    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("Health: " + health, 20, 55);
}

// पुरानी draw() के अंत में यह लाइन जोड़ें:
// drawHealth(); // ==========================
// PART 5

// Inventory
let inventory = [];

// First Key
const key = {
    x: 500,
    y: 250,
    size: 20,
    collected: false
};

// Exit Door
const door = {
    x: 850,
    y: 180,
    width: 50,
    height: 90,
    locked: true
};

function checkItems() {

    // Pick up key
    if (!key.collected &&
        player.x < key.x + key.size &&
        player.x + player.size > key.x &&
        player.y < key.y + key.size &&
        player.y + player.size > key.y) {

        key.collected = true;
        inventory.push("Golden Key");
        alert("🔑 Golden Key Collected!");
    }

    // Open Door
    if (door.locked &&
        inventory.includes("Golden Key") &&
        player.x < door.x + door.width &&
        player.x + player.size > door.x &&
        player.y < door.y + door.height &&
        player.y + player.size > door.y) {

        door.locked = false;
        alert("🚪 Door Unlocked!");
    }

}

function drawItems() {

    // Draw Key
    if (!key.collected) {
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(key.x, key.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw Door
    ctx.fillStyle = door.locked ? "#8B4513" : "#00aa00";
    ctx.fillRect(door.x, door.y, door.width, door.height);

    // Inventory Text
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.fillText("Inventory: " + inventory.join(", "), 20, 110);
} // ==========================
// PART 6

const monster = {
    x: 700,
    y: 350,
    size: 40,
    speed: 1.6,
    color: "#cc0000"
};

function updateMonster() {

    let dx = player.x - monster.x;
    let dy = player.y - monster.y;

    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 1) {
        monster.x += (dx / distance) * monster.speed;
        monster.y += (dy / distance) * monster.speed;
    }

    // Attack
    if (
        player.x < monster.x + monster.size &&
        player.x + player.size > monster.x &&
        player.y < monster.y + monster.size &&
        player.y + player.size > monster.y
    ) {

        health -= 0.2;

        if (health <= 0) {
            health = 0;
            alert("💀 GAME OVER\nThe Warden caught Jimmy!");
            location.reload();
        }
    }
}

function drawMonster() {

    ctx.fillStyle = monster.color;

    ctx.beginPath();
    ctx.arc(monster.x, monster.y, monster.size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("The Warden", monster.x - 25, monster.y - 25);
} // ===== FINAL ENDING =====

function finishGame() {
    alert("🎉 Congratulations!\n\nYou escaped from Shadow Heist.\nPrototype Version 1.0 Completed!");
    console.log("Shadow Heist Prototype Completed");
}

// Exit Door पर जीतने के बाद इसे कॉल करें:
// finishGame();
