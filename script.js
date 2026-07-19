// Escape Protocol: Black Manor
// Part 7 - Game Logic

const game = {
  player: {
    name: "Jimmy",
    health: 100,
    keys: 0,
    x: 100,
    y: 100,
    speed: 5
  },

  friends: [
    "Jake",
    "Rahul",
    "Tommy"
  ],

  monster: {
    name: "Mr. Ghoul",
    x: 500,
    y: 300,
    speed: 2
  }
};

function startGame() {
  alert("Escape Protocol: Black Manor\n\nFind the key and escape before Mr. Ghoul catches you!");
  console.log("Game Started");
}

window.onload = startGame;

// Keyboard Controls
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      game.player.y -= game.player.speed;
      break;
    case "ArrowDown":
      game.player.y += game.player.speed;
      break;
    case "ArrowLeft":
      game.player.x -= game.player.speed;
      break;
    case "ArrowRight":
      game.player.x += game.player.speed;
      break;
  }

  console.log(
    `Player Position: ${game.player.x}, ${game.player.y}`
  );
});
