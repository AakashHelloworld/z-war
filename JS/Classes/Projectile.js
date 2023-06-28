class Projectile {
    constructor({x, y, direction, hitDamage}) {
      this.position = { x: x, y: y };
      this.direction = direction;
      this.speed = 10;
      this.status=1
      this.hitDamage=hitDamage
    }
  
    update() {
      if(this.direction== "left" || this.direction == "right"){
        this.checkHitZombie()
      }else if(this.direction == "up"){
        this.checkHitEnemySpaceship()
      }
      
      if (this.direction === 'left') {
        this.position.x -= this.speed;
      } else if (this.direction === 'right') {
        this.position.x += this.speed;
      } else if (this.direction === 'up') {
        this.position.y -= this.speed;
      }

      if(this.position.x>canvasW || this.position.x<0 || this.position.y<0){
        // if the projectile goes off the screen we willl set that projectile as passive later in index js it gets eliminated
        this.status=0
      }
    }
  
    draw() {
      c.fillStyle = 'black';
      c.beginPath();
      c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
      c.fill();
    }
    checkHitEnemySpaceship(){
      if(this.position.x>=enemy.position.x && this.position.x<= (enemy.position.x+enemy.size.width) && this.position.y<=(enemy.position.y+enemy.size.height)){
        enemy.healthDecrease(this.hitDamage)
        this.deleteThisProjectile()
      }
    }
    checkHitZombie(){
      for(let i=0; i<zombieArray.length; i++){
        if (Math.floor(this.position.x) > Math.floor(zombieArray[i].position.x) && Math.floor(this.position.x) < Math.floor(zombieArray[i].position.x + zombieArray[i].size.width) && this.position.y>=zombieArray[i].position.y){
          // projectile has hit zombie
            zombieArray[i].healthDecrease(this.hitDamage)
            this.deleteThisProjectile()
            break
        }        
      }
    }

    deleteThisProjectile(){
      this.status=0
      // player.projectiles.splice(player.projectiles.findIndex(projectile=>projectile.id==this.id),1)
    }
  }