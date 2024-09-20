function fatorial(n){
    let x = n
    multip = n
    while(x>1){
        menosum = x-1
        multip *= menosum
        x--
    }
    console.log(multip)
}

fatorial(4)