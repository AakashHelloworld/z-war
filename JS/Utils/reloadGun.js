function reloadGun(){
    let {reloadTime,maxMagzine,magzine} = guns[gunstatus]
    if(magzine==0)
    {
    let current_gamestatus = gunstatus;
    setTimeout(() => {
        console.log(guns[current_gamestatus])
        guns[current_gamestatus].magzine = maxMagzine;
    }, reloadTime*1000);
    }
}