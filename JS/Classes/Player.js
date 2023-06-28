
let gameOver = false;
function restartGame() {
  // Remove click event listener from canvas
  canvas.removeEventListener('click', restartGame);
  // Reset player position, health, and projectiles
  player.position.x = 200;
  player.position.y = 200;
  player.health = player.maxHealth;
  player.projectiles = [];
  gameOver = false

}

class Player {
  constructor() {

    this.position = {
      x: 200,
      y: 200,
    }
    this.maxHealth=500
    this.health=500  // let the health of the player be 1000 , a number choosen without reason
    
    this.velocity = {
      x: 0,
      y: 0,
    }
    this.width = 45;
    this.height = 70;

    this.sides = {
      bottom: this.position.y + this.height,
    }

    this.gravity = 1
    this.projectiles = [];
    this.facingDirection = 'right';
  }
  shoot() {
    let direction = this.facingDirection;
    const projectile = new Projectile({
      x: this.position.x + 25, 
      y: this.position.y + 10, 
      direction: direction, 
      hitDamage: 10
    });
    this.projectiles.push(projectile);
  }

  draw() {
    this.showHealthBar()
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
  healthDecrease(value){
    this.health-=value
    if(this.health<0){
      this.die()
    }
  }
  showHealthBar(){
    const healthbarHeight=15
    const healthBarScale=0.6
    // outer layer-->healthbar outline
    c.fillStyle="blue"
    c.fillRect(
        20,
        50,
        this.maxHealth*healthBarScale,
        healthbarHeight
    )
    if(this.health<0){
      return
    }
    // actual health
    const off_fit={
      x:3,
      y:2
    }
    c.fillStyle="lightgreen"
    c.fillRect(
        20+off_fit.x,
        50+off_fit.y,
        this.health*healthBarScale-2*off_fit.x,
        healthbarHeight-2*off_fit.y
    )
}

  update() {
    if(!gameOver){
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.sides.bottom = this.position.y + this.height;
    if (this.sides.bottom + this.velocity.y <= ground.y) {
      this.velocity.y += this.gravity;

    } else {
      this.velocity.y = 0
    }
    if (this.velocity.x > 0) {
      this.facingDirection = 'right';
    } else if (this.velocity.x < 0) {
      this.facingDirection = 'left';
    }
  }
  }
  die(){
    console.log("player died. Game over")
    // further code will be here. right now i don't have any idea what to do here
    gameOver = true
    const padding = 10;
    const buttonWidth = 120 + 2 * padding;
    const buttonHeight = 40 + 2 * padding;
    const buttonX = canvasW / 2 - buttonWidth / 2;
    const buttonY = canvasH / 2 - buttonHeight / 2;
    c.fillStyle = 'blue';
    c.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    c.fillStyle = 'white';
    c.font = '24px sans-serif';
    const text = 'Play Again';
    const textWidth = c.measureText(text).width;
    c.fillText(text, canvasW / 2 - textWidth / 2, canvasH / 2 + 10);
    // Add click event listener to canvas
    canvas.addEventListener('click', restartGame);
  }
}