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
    }
    draw(){
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
}