const distance=(p1,p2)=>{
    const d=Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2))
    return d
}
class Zombie{
    constructor({position,velocity,health,hitDamage}){
        this.status=1   // status 1 means it is active ; similarly status 0 means passive
        this.hitDamage=hitDamage    // how much health of player decreases after being hit by zombie
        this.position=position
        this.velocity=velocity
        this.size={
            height:70,
            width:40
        }
        this.sides = {
            bottom: this.position.y + this.size.height,
        }
        this.color="blue"
        this.maxHealth=health
        this.health=health
    }
    healthDecrease(value){
        this.health-=value
        if(this.health<0){
            // if the health is less than zero the zombie should die
            this.die()
        }
    }
    showHealthBar(){
        const healthbarHeight=5
        const healthBarScale=1.5
        // outer layer-->healthbar outline
        c.fillStyle=this.color
        c.fillRect(
            this.position.x+(this.size.width/2)-(this.maxHealth*healthBarScale/2),
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
            this.position.x+(this.size.width/2)-(this.maxHealth*healthBarScale/2)+off_fit.x,
            this.position.y-20+off_fit.y,
            this.health*healthBarScale-2*off_fit.x,
            healthbarHeight-2*off_fit.y
        )
    }
    draw(){
        c.fillStyle=this.color
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )
    }
    attackPlayer(){
        // for now, let this be as basic as it is possible
        player.healthDecrease(this.hitDamage)
    }
    update(){
        this.draw()
        this.showHealthBar()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        this.sides.bottom =  this.position.y + this.size.height;
        if(this.sides.bottom + this.velocity.y <= ground.y){
            this.velocity.y += this.gravity ;
        }else{
            this.velocity.y = 0
        }

        if(this.position.x>player.position.x){
            // go left
            this.velocity.x=-Math.abs(this.velocity.x)
        }else if(this.position.x<player.position.x){
            // go left
            this.velocity.x=Math.abs(this.velocity.x)
        }
        
        // here check whether to attack or not
        if(distance(player.position,this.position)<=2){
            // if the separation between player and zombie is less than 2 pixels and the separation between player and ground is less than 0.1 (i.e the player is in ground), then zombie can attack the player
            this.attackPlayer()
        }
    }
    die(){
        this.status=0   // we are setting the status as passive
        // which we will later target in zombieArray to eliminate them
    }
}