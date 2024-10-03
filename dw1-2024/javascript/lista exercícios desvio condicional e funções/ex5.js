function converter(cm, tipo){
    let r = 0
    if(tipo == "km"){
        r = cm/100000
    }else{
        if(tipo == "m"){
            r = cm/100
        }else{
            if(tipo == "mm"){
                r = cm*10
            }
        }
    }
    console.log(r)
}

converter(700, "m")
converter(20000000, "km")