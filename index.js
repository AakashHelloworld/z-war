const canvas=document.querySelector("#canvas")
const c =canvas.getContext("2d")

const canvasW=document.querySelector(".main").getBoundingClientRect().width
const canvasH=document.querySelector(".main").getBoundingClientRect().height

canvas.width=canvasW
canvas.height=canvasH

const capsuleArray=[]
let counter=1
const buffer=3
const enemy=new ENEMYSPACESHIP()

const animate=()=>{
    window.requestAnimationFrame(animate)
    if(buffer%counter==0){
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
        counter=1
    }
    counter+=1
}
animate()