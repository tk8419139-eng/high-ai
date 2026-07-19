// =========================
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
// drawHealth();
