function sin(theta){
    const radian=(Math.PI/180)*theta
    return Math.sin(radian)
}

function cos(theta){
    const radian=(Math.PI/180)*theta
    return Math.cos(radian)
    // or
    //  return sin(90-theta)
}