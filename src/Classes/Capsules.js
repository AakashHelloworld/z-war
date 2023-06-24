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
            y:-velocity*sin(projectionAngle)
        }
        this.angle=Math.PI/2+Math.atan(this.velocity.y/this.velocity.x)
        this.position=position
        this.color="orange"
        this.groundTouched=false
    }
    draw(){
        c.translate(this.position.x+this.size.width/2, this.position.y+this.size.height/2);
        c.rotate(this.angle);
        c.translate(-(this.position.x+this.size.width/2), -(this.position.y+this.size.height/2));

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
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        if(this.position.y+this.size.height+this.velocity.y+0.1>=ground.y){
            // this.position.y=ground.y-this.size.height-0.1
            this.velocity.y=0
            this.velocity.x=0
            this.groundTouched=true
        }else{
            this.velocity.y+=gravity
            if(this.groundTouched==false){
                this.angle=Math.PI/2+Math.atan(this.velocity.y/this.velocity.x)
            }
        }

    }
}