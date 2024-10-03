function ehBissexto(ano){
    if(ano%4 == 0 && ano%100!=0 || ano%400 == 0) console.log("Eh bissexto sim uai")
        else console.log("Nao eh bissexto nao, ta maluco???")
}

ehBissexto(2024) //SIM (???)
ehBissexto(2001) //nao
ehBissexto(2028)//sim