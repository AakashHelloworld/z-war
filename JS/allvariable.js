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
    new Gun({
      name: "Refile",
      fireRate: 1,
      hitDamage:50,
      magzine:7,
      maxMagzine:7,
      speed: 15,
      reloadTime:1,
      rang:0,
      key:1,
      position:{
        x:5,y:5
      }
    }),
    new Gun({
      name: "Ak47",
      fireRate: 30,
      hitDamage:7,
      magzine:30,
      speed: 7,
      maxMagzine:30,
      reloadTime:5,
      rang: 0,
      key:2,
      position:{
        x:170, y:5
      }
    }),
    new Gun({
      name: 'Machine',
      fireRate: 50,
      hitDamage: 20,
      magzine:50,
      speed: 8,
      maxMagzine:50,
      reloadTime:30,
      rang:0,
      key:3,
      position:{
        x:335,y:5
      }
    })
  ]
let gunstatus = 0; // it is index-> allows to select any gun from the array



  // Object
const enemy=new ENEMYSPACESHIP()
const player = new Player();
