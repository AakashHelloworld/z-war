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
    constructor({velocity, projectionAngle, position}){
        this.size={
            width:35,
            height:70
        }
        this.velocity={
            x:velocity*cos(projectionAngle),
            y:velocity*sin(projectionAngle)
        }
        this.position=position
        this.gravity=3
        this.color="orange"
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
        this.position.y-=this.velocity.y
        // apply gravity on y axis
        this.velocity.y-=this.gravity
    }
}