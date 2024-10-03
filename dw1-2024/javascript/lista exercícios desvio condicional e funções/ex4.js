function gotas(idade, peso){
    if(idade>=12){
        if(peso>=60){
            console.log("40 gotas")
        } else{
            console.log("35 gotas")
        }
    } else{
        if(peso>5 && peso<9){
            console.log("5 gotas")
        } else{
            if(peso>9.1 && peso<16){
                console.log("10 gotas")
            } else{
                if(peso>16.1 && peso<24){
                    console.log("20 gotas")
                } else{
                    console.log("30 gotas")
                }
            }
        }
    }
}

gotas(50, 70) 
// 40 gotas
gotas(60, 50)
// 35 gotas
gotas(10, 20)
// 20