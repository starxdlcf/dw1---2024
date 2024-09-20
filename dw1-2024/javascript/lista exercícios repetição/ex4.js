function primo(n){
    x = 1
    cont = 0
    while(x<=n){
        if(n%x == 0){
            cont++
        }
        x++
    }
    if(cont != 2){
        console.log("Não é primo!")
    } else{
        console.log("É primo!")
    }
}

primo(5)