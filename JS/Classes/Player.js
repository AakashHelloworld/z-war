
class Player {
    constructor(){
      this.position = {
        x: 200,
        y: 200,
      }
  
      this.velocity = {
        x: 0,
        y: 0,
      }
      this.width = 50;
      this.height =100;
  
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

      draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
      }
  
    update() {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.sides.bottom =  this.position.y + this.height;
      if(this.sides.bottom + this.velocity.y <= canvasH){
        this.velocity.y += this.gravity ;
    
      }else{
        this.velocity.y = 0
      }
      if (this.velocity.x > 0) {
        this.facingDirection = 'right';
      } else if (this.velocity.x < 0) {
        this.facingDirection = 'left';
      }
    }
  }