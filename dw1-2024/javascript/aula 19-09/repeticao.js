function mostratabuada(n){

    console.log("Tabuada do número "+n)
    console.log("\n")

    let x = 1
    while(x <= 10){
        let result = x*n
        console.log(x+" x "+n+" = "+result)
        x++
    }
    console.log("\n")
}

mostratabuada(5)

//três formas de imprimir variável no javascript

function printar(w){
    contagem = 0
    while(contagem <= 2){
        console.log(w+' * "contagem" = '+ w * contagem)
        contagem++
    }
    console.log("\n")
}

function printa(w){
    contagem = 0
    while(contagem <= 2){
        console.log(w+" * 'contagem' = "+ w * contagem)
        contagem++
    }
    console.log("\n")
}

function print(w){
    contagem = 0
    while(contagem <= 2){
        console.log(`${w} * ${contagem} = ${w*contagem}`)
        contagem++
    }
    console.log("\n")
}

printar(2)
printa(2)
print(2)