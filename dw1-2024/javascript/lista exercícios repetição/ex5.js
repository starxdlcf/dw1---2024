
function listeprimos(i){
    
    for(let x = 1; x<=i; x++){
        let ehPrimo = primo(x)
        if(ehPrimo){
            console.log(x)
        }
    }
}


function primo(n){
    
    let cont = 0
    for(let x = 1; x<=n; x++){
        if(n%x == 0) cont++ 
        
        if (cont > 2) return false
    }
    return true
}

listeprimos(25)

// o comando abaixo retorna ou true ou false com a condição "cont > 2"
// return cont > 2 ? true : false