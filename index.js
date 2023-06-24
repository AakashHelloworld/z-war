const canvas=document.querySelector("#canvas")
const c =canvas.getContext("2d")

const canvasW=document.querySelector(".main").getBoundingClientRect().width
const canvasH=document.querySelector(".main").getBoundingClientRect().height

canvas.width=canvasW
canvas.height=canvasH

const key = {
    ArrowLeft:{
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowUp:{
        pressed: false
    }
}

const capsuleArray=[]
let counter=1
const buffer=3
const enemy=new ENEMYSPACESHIP()
const player = new Player();
const animate=()=>{
    window.requestAnimationFrame(animate)

    // if(buffer%counter==0){
        c.clearRect(0,0,canvas.width,canvas.height)
        c.fillStyle="white"
        c.fillRect(0,0,canvas.width,canvas.height)
        enemy.draw()
        enemy.update()
        // capsules iteration

        capsuleArray.forEach(capsule=>{
            capsule.draw()
            capsule.update()
        })
        // counter=1
    // }
    player.draw()

    player.update()
    if(key.ArrowLeft.pressed){
        player.velocity.x =-5
    }else if(key.ArrowRight.pressed){
        player.velocity.x =5
    }else if(!key.ArrowLeft.pressed){
        player.velocity.x =0
    }
    player.projectiles.forEach(projectile => {
        projectile.update();
        projectile.draw();
      });
}
animate()