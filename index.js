const canvas=document.querySelector("#canvas")
const c =canvas.getContext("2d")

const canvasW=document.querySelector(".main").getBoundingClientRect().width-20
const canvasH=document.querySelector(".main").getBoundingClientRect().height-20

canvas.width=canvasW
canvas.height=canvasH


const animate=()=>{
    window.requestAnimationFrame(animate)
    if(!gameOver){
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





        guns.forEach((gun)=>{
            gun.drawStatus()
        })




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
        projectile.draw();
        projectile.update();
    });
    // here after implementation of all logic we will eliminate all zombies, projectile that are passive in status
    eliminatePassiveItems(zombieArray,"status",0)
    eliminatePassiveItems(player.projectiles,"status",0)
}
}
animate()
