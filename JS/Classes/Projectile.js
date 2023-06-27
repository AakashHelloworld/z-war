class Projectile {
    constructor(x, y, direction) {
      this.position = { x: x, y: y };
      this.direction = direction;
      this.speed = 10;
    }
  
    update() {
      if (this.direction === 'left') {
        this.position.x -= this.speed;
      } else if (this.direction === 'right') {
        this.position.x += this.speed;
      } else if (this.direction === 'up') {
        this.position.y -= this.speed;
      }
    }
  
    draw() {
      c.fillStyle = 'black';
      c.beginPath();
      c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
      c.fill();
    }

  }