function ValeApena(alcool, gasolina){
    if(alcool <= gasolina/100 * 70){
        compensa = true
    } else{
        compensa = false
    }
    console.log(compensa)
}
ValeApena(8, 5)