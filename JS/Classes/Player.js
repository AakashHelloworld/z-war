class Player {
  constructor() {

    this.position = {
      x: canvasW/2 + 45,
      y: 560,
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
    let {hitDamage, speed,fireRate, magzine, reloadTime, rang  } = guns[gunstatus]
    if(magzine){
    const projectile = new Projectile({
      x: this.position.x + 25, 
      y: this.position.y + 10, 
      direction: direction, 
      hitDamage: hitDamage,
      fireRate:fireRate,
      magzine: magzine,
      reloadTime:reloadTime,
      rang:rang,
      speed:speed
    });
    this.projectiles.push(projectile);
    guns[gunstatus].magzine -= 1; 
  }
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
        80,
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
        80+off_fit.y,
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
    console.log("player died. Game over");
    gameOver = true;
    const button = document.createElement('button');
    button.textContent = 'Play Again';
    button.style.position = 'fixed';
    button.style.left = '50%';
    button.style.top = '50%';
    button.style.transform = 'translate(-50%, -50%)';    
    button.style.padding = '10px';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.fontSize = '24px';
    button.style.cursor = "pointer"
    // Add click event listener to button
    button.addEventListener('click', restartGame);
    // Add button to page
    document.body.appendChild(button);
  }
}