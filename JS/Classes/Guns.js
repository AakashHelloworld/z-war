class Gun{
    constructor({name,fireRate,hitDamage,magzine,maxMagzine, speed, reloadTime, rang, key, position}){
        this.name=name
        this.fireRate=fireRate
        this.hitDamage=hitDamage
        this.maxMagzine=maxMagzine
        this.magzine=magzine
        this.speed=speed
        this.reloadTime=reloadTime
        this.rang=rang
        this.key=key
        this.reloadingStatus="not-reloading"
        this.reloadingBar=null
        this.reloadingTimeRemaining=0
        this.position=position
        this.size={
            width:160,
            height:60
        }
    }
    reloadSelf(){
        const timeUnit=50
        if(this.magzine==0 && this.reloadingStatus=="not-reloading"){
            this.reloadingStatus="reloading"
            this.reloadingTimeRemaining=this.reloadTime*1000
            this.reloadingBar=setInterval(()=>{
                this.reloadingTimeRemaining-=timeUnit
                if(this.reloadingTimeRemaining<=0){
                    // i.e the gun has been reloaded
                    this.magzine=this.maxMagzine
                    this.reloadingStatus="not-reloading"
                    // and now we need to clear this interval
                    this.clear()
                }
            },timeUnit)
        }
    }
    clear(){
        clearInterval(this.reloadingBar)
    }
    reloadingAnimation(){
        c.fillStyle="red"
        c.fillRect(
            this.position.x,
            this.position.y+50,
            (this.reloadingTimeRemaining/1000)/this.reloadTime*this.size.width,
            10
        )
    }
    drawStatus(){
        if(gunstatus==this.key-1){
            c.fillStyle = 'blue';
        }else{
            c.fillStyle = 'green';
        }
        c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
        c.fillStyle = 'white';
        c.font = '24px sans-serif';
        c.fillText(`${this.name} ${this.magzine}`, this.position.x+ 10, 40);

        if(this.reloadingStatus=="reloading"){
            this.reloadingAnimation()
        }
    }
}