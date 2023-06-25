class Zombie{
    constructor({position,velocity,health}){
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
        this.health=health
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
    update(){
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
    }
}