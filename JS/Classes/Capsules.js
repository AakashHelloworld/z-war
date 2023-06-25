const sin=(theta)=>{
    const radian=(Math.PI/180)*theta
    return Math.sin(radian)
}
const cos=(theta)=>{
    const radian=(Math.PI/180)*theta
    return Math.cos(radian)
    // or
    //  return sin(90-theta)
}
class Capsule{
    constructor({velocity, projectionAngle, position,id}){
        this.size={
            width:35,
            height:70
        }
        this.id=id
        this.velocity={
            x:velocity*cos(projectionAngle),
            y:-velocity*sin(projectionAngle)
        }
        this.position=position
        this.sides={
            bottom:this.position.y+this.size.height
        }
        this.angle=Math.PI/2+Math.atan(this.velocity.y/this.velocity.x)
        this.color="orange"
        this.groundTouched=false
        this.zombieTimer=2000 // 2 seconds
        this.zombieReleaseInitiated=false
    }
    draw(){
        // c.translate(this.position.x+this.size.width/2, this.position.y+this.size.height/2);
        // c.rotate(this.angle);
        // c.translate(-(this.position.x+this.size.width/2), -(this.position.y+this.size.height/2));

        c.fillStyle=this.color
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )

        c.setTransform(1, 0, 0, 1, 0, 0);   // to reset the rotation so that it wont affect other elements
    }
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom =  this.position.y + this.size.height;
        if(this.sides.bottom + this.velocity.y <= ground.y){
            this.velocity.y += gravity ;
        }else{
            this.velocity.y = 0
            this.velocity.x=0
            if(this.zombieReleaseInitiated==false){
                this.zombieReleaseCountDown()
                this.zombieReleaseInitiated=true
            }
        }


        // this.position.x+=this.velocity.x
        // this.position.y+=this.velocity.y
        // if(this.position.y+this.size.height+this.velocity.y+0.1>=ground.y){
        //     // this.position.y=ground.y-this.size.height-0.1
        //     this.velocity.y=0
        //     this.velocity.x=0
        //     this.groundTouched=true
        // }else{
        //     this.velocity.y+=gravity
        //     if(this.groundTouched==false){
        //         this.angle=Math.PI/2+Math.atan(this.velocity.y/this.velocity.x)
        //     }
        // }
    }
    deleteThisCapsule(){
        setTimeout(()=>{
            capsuleArray.splice(capsuleArray.findIndex(capsule=>capsule.id==this.id),1)
        },1800)
    }
    zombieReleaseCountDown(){
        setTimeout(()=>{
            zombieArray.push(new Zombie({
                position:{
                    x:this.position.x,
                    y:this.position.y
                },
                velocity:{
                    x:0.78,
                    y:0
                },
                health:50
            }))
            // then we need to delete the capsule from the capsule array
            this.deleteThisCapsule()
        },this.zombieTimer)
    }
}