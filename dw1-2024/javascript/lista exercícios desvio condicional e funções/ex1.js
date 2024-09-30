function classificacao(n){
    if(5<=n && n<=7){
        console.log("Infantil A")
    } else if(n<=10) console.log("Infantil B")
        else if(n<=13) console.log("Juvenil A")
            else if(n<=17) console.log("Juvenil B")
                else console.log("Adulto") 
}

classificacao(10)
classificacao(28)
classificacao(6)