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

let gameOver = false;
let capsuleArray=[]
let zombieArray=[]
const guns = [

    {
      name: "Refile",
       fireRate: 1,
       hitDamage:10,
       magzine:7,
       maxMagzine:7,
       speed: 10,
       reloadTime:1,
       rang:0,
       key:1
    },
    {
      name: "Ak47",
      fireRate: 30,
      hitDamage:7,
      magzine:30,
      speed: 7,
      maxMagzine:30,
      reloadTime:5,
      rang: 0,
      key:2

    },
    {
      name: 'Machine',
      fireRate: 100,
      hitDamage: 20,
      magzine:100,
      speed: 5,
      maxMagzine:100,
      reloadTime:20,
      rang:0,
      key:3
    }
  ]
let gunstatus = 0;



  // Object
const enemy=new ENEMYSPACESHIP()
const player = new Player();
