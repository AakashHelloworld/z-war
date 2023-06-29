function restartGame() {
    // Remove click event listener from canvas
    const button = document.querySelector('button');
    if (button) {
      document.body.removeChild(button);
    }
    // Reset player position, health, and projectiles
    player.position.x = 200;
    player.position.y = 560;
    player.health = player.maxHealth;
    enemy.health=enemy.maxHealth
    player.projectiles = [];
    capsuleArray = [];
    zombieArray = [];
    gameOver = false
  
  }