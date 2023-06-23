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
       this.color="red"
       this.health=1000
       this.gravity=4
       this.nextCapsuleTimer=Math.floor(Math.random()*20)+20
       this.counter=0
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
        // enemy spaceship logic
        if(this.counter!=this.nextCapsuleTimer){
            this.counter+=1
        }else{
            // when the time comes
            this.nextCapsuleTimer=Math.floor(Math.random()*20)+20
            this.counter=0
            this.throwCapsules()
        }
    }
    throwCapsules(){
        capsuleArray.push(new Capsule({
            velocity:Math.floor(Math.random()*20)+2,
            projectionAngle: -Math.floor(Math.random()*180),
            position:{
                x:this.position.x+this.size.width/2,
                y:50
            }
        }))
    }
}