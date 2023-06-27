

window.addEventListener('keyup', (event)=>{
    // console.log(event.key)
    switch(event.key){  
        case 'ArrowLeft':
            key.ArrowLeft.pressed = false
            // console.log(key.ArrowLeft.pressed)
            break
        case 'ArrowRight':
            key.ArrowRight.pressed = false
            // console.log(key.ArrowRight.pressed)
            break
        case 's':
                player.shoot();
                break
    }

})

window.addEventListener('keydown', (event)=>{
    // console.log(event.key)
    switch(event.key){
        case ' ':
            if(player.velocity.y ==0 ){
            player.velocity.y = -20
            }
            break
        case 'ArrowLeft':
            key.ArrowLeft.pressed = true
            break
        case 'ArrowRight':
            key.ArrowRight.pressed = true
            break
        case 'ArrowUp':
            player.facingDirection = 'up'
       
    }

})