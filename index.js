const canvas=document.querySelector("#canvas")
const c =canvas.getContext("2d")

const canvasW=document.querySelector(".main").getBoundingClientRect().width
const canvasH=document.querySelector(".main").getBoundingClientRect().height

canvas.width=canvasW
canvas.height=canvasH

const gravity=1.9

const ground={
    x:-100,
    y:canvasH-100,
    width:2000,
    height:100,
    normalReactionRedartadion:-0.2
}

const capsuleArray=[]

const enemy=new ENEMYSPACESHIP()

const animate=()=>{
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)
    // ground
    c.fillStyle="green"
    c.fillRect(
        ground.x,
        ground.y,
        ground.width,
        ground.height
    )
    // enemy spaceship
    enemy.draw()
    enemy.update()
    // capsules iteration
    capsuleArray.forEach(capsule=>{
        capsule.draw()
        capsule.update()
    })
}
animate()