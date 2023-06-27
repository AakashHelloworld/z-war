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
    const projectile = new Projectile(this.position.x, this.position.y, direction);
    this.projectiles.push(projectile);
  }

  draw() {
    this.showHealthBar()
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  showHealthBar(){
    const healthbarHeight=5
    const healthBarScale=0.2
    // outer layer-->healthbar outline
    c.fillStyle="blue"
    c.fillRect(
        this.position.x+(this.width/2)-(this.maxHealth*healthBarScale/2),
        this.position.y-20,
        this.maxHealth*healthBarScale,
        healthbarHeight
    )
    if(this.health<0){
      return
    }
    // actual health
    const off_fit={
      x:1,
      y:0.5
    }
    c.fillStyle="red"
    c.fillRect(
        this.position.x+(this.width/2)-(this.maxHealth*healthBarScale/2)+off_fit.x,
        this.position.y-20+off_fit.y,
        this.health*healthBarScale-2*off_fit.x,
        healthbarHeight-2*off_fit.y
    )
}

  update() {   
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