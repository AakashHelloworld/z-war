const canvas=document.querySelector("#canvas")
const c =canvas.getContext("2d")

const canvasW=document.querySelector(".main").getBoundingClientRect().width-20
const canvasH=document.querySelector(".main").getBoundingClientRect().height-20

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

const gravity=0.6

const ground={
    x:-100,
    y:canvasH-100,
    width:2000,
    height:100,
    normalReactionRedartadion:-0.2
}


const capsuleArray=[]
const zombieArray=[]
const enemy=new ENEMYSPACESHIP()
const player = new Player();
const animate=()=>{
    window.requestAnimationFrame(animate)
    c.fillStyle="white"
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillRect(0,0,canvas.width,canvas.height)
    // ground
    c.fillStyle="green"
    c.fillRect(
        ground.x,
        ground.y,
        ground.width,
        ground.height
    )

    enemy.draw()
    enemy.update()
    // capsules iteration

    capsuleArray.forEach(capsule=>{
        capsule.draw()
        capsule.update()
    })
    zombieArray.forEach(zombie=>{
        // zombie.draw()
        zombie.update()
    })

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