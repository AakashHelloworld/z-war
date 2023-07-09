
class Capsule{
    constructor({velocity, projectionAngle, position,id,health,maxZombieRelease}){
        this.size={
            width:35,
            height:70
        }
        this.status=1
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
        this.toRelease=true
        this.health=health
        this.maxHealth=health
        this.zombieReleaser=null
        this.noOfZombieReleased=0
        this.maxZombieRelease=maxZombieRelease
    }
    draw(){
        // c.translate(this.position.x+this.size.width/2, this.position.y+this.size.height/2);
        // c.rotate(this.angle);
        // c.translate(-(this.position.x+this.size.width/2), -(this.position.y+this.size.height/2));
        this.showHealthBar()
        c.fillStyle=this.color
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )

        c.setTransform(1, 0, 0, 1, 0, 0);   // to reset the rotation so that it wont affect other elements
    }
    healthDecrease(value){
        this.health-=value
        if(this.health<0){
            // if the health is less than zero the zombie should die
            this.die()
        }
    }
    showHealthBar(){
        // console.log("capsule health bar ")
        const healthbarHeight=5
        const healthBarScale=0.5
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
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom =  this.position.y + this.size.height;
        if(this.sides.bottom + this.velocity.y <= ground.y){
            this.velocity.y += gravity ;
        }else{
            this.velocity.y = 0
            this.velocity.x=0
            if(this.toRelease==true){
                this.zombieReleaseCountDown()
                this.toRelease=false
            }
        }
    }
    die(){
        // setTimeout(()=>{
        //     capsuleArray.splice(capsuleArray.findIndex(capsule=>capsule.id==this.id),1)
        // },1800)
        this.status=0
        clearTimeout(this.zombieReleaser)
    }
    zombieReleaseCountDown(){
        this.zombieReleaser=setTimeout(()=>{
            zombieArray.push(new Zombie({
                position:{
                    x:this.position.x+4,
                    y:this.position.y
                },
                velocity:{
                    x:0.78,
                    y:0
                },
                health:50,
                hitDamage:10
            })
            )
            this.noOfZombieReleased+=1
            if(this.noOfZombieReleased<this.maxZombieRelease){
                this.toRelease=true
                this.zombieTimer=2000+Math.floor(Math.random()*2000)
            }else{
                this.die()
            }
        },this.zombieTimer)
    }
}