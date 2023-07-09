class Projectile {
    constructor({x, y, direction, hitDamage, fireRate, magzine, reloadTime, rang ,speed }) {
      this.position = { x: x, y: y };
      this.direction = direction;
      this.speed = speed;
      this.status=1
      this.hitDamage=hitDamage
      this.fireRate = fireRate
      this.magzine = magzine
      this.reloadTime = reloadTime
      this.rang = rang
    }
  
    update() {
      if(this.direction== "left" || this.direction == "right"){
        if(this.status==1){
          this.checkHitZombie()
        }
        if(this.status==1){
          this.checkHitCapsule()
        }
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

      if(this.position.x>canvasW -this.rang  || this.position.x<0+ this.rang || this.position.y<0){
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
    checkHitCapsule(){
      for(let i=0; i<capsuleArray.length; i++){
        if (Math.floor(this.position.x) > Math.floor(capsuleArray[i].position.x) && Math.floor(this.position.x) < Math.floor(capsuleArray[i].position.x + capsuleArray[i].size.width) && this.position.y>=capsuleArray[i].position.y && this.position.y<=(capsuleArray[i].position.y+capsuleArray[i].size.height)){
          // projectile has hit zombie
            capsuleArray[i].healthDecrease(this.hitDamage)
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