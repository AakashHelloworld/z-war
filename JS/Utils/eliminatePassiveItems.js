 function eliminatePassiveItems(arr, property,eliminationValue){
    let i=0
    while(true){
        if(i>=arr.length){
            break
        }
        if(arr[i][property]==eliminationValue){
            arr.splice(i,1)
            continue
        }
        i+=1
    }
}