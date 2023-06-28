class ENEMYSPACESHIP{
    constructor(){
       this.position={
            x:canvasW/2-250,
            y:0
       }
       this.size={
        width:500,
        height:100
       }
       this.velocity={
        x:0.3,y:0
       }
       this.color="red"
       this.health=1000
       this.nextCapsuleTimer=Math.floor(Math.random()*100)+200
       this.capsuleThrowCounter=0
       this.noOfCapsuleThrown=0
       this.maxHealth=10000
       this.health=10000
    }
    showHealthBar(){
        const healthbarHeight=15
        const healthBarScale=0.03
        // outer layer-->healthbar outline
        c.fillStyle="blue"
        c.fillRect(
            canvasW-((this.maxHealth*healthBarScale)+10),
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
        c.fillStyle="red"
        c.fillRect(
            canvasW-((this.maxHealth*healthBarScale)+10)+off_fit.x,
            50+off_fit.y,
            this.health*healthBarScale-2*off_fit.x,
            healthbarHeight-2*off_fit.y
        )
    }
    draw(){
        this.showHealthBar()
        // enemy spaceShip
        c.fillStyle=this.color
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )
        // enemy spaceship health bar
        c.fillStyle="blue"
        c.fillRect(
            this.position.x+this.size.width/2-50,
            this.position.y+this.size.height-10,
            100,
            5
        )
    }
    healthDecrease(value){
        this.health-=value
        if(this.health<0){
            // if the health is less than zero the zombie should die
            this.die()
        }
    }
    update(){
        this.position.x+=this.velocity.x
        if(this.capsuleThrowCounter!=this.nextCapsuleTimer){
            this.capsuleThrowCounter+=1
        }else{
            // when the time comes
            this.velocity.x=-(this.velocity.x)
            this.nextCapsuleTimer=Math.floor(Math.random()*100)+300
            this.capsuleThrowCounter=0
            this.throwCapsules()
        }
    }
    throwCapsules(){
        capsuleArray.push(new Capsule({
            velocity:Math.floor(Math.random()*3)+2,
            projectionAngle: -Math.floor(Math.random()*180),
            position:{
                x:this.position.x+this.size.width/2,
                y:50
            },
            id:this.noOfCapsuleThrown+1
        }))
        this.noOfCapsuleThrown+=1
    }
    die(){
        // i don't know what to do here
    }
}