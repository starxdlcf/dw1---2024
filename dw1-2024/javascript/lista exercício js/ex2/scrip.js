
let botao = document.getElementById("botao")

let div = document.getElementById("div")
let div10 = document.getElementById("div10")
let div1 = document.getElementById("div1")

function troco(){
    let troco = Number(document.getElementById("troco").value)

    let cedula20 = Math.floor(troco/20)

    let resto = Math.floor(troco%20)

    let cedula10 = Math.floor(resto/10)

    let moeda1 = Math.floor(resto%10)

    let saida = ("Cédula de 20: "+ cedula20 +" - Cédula de 10: "+ cedula10 +" - Moeda de 1: "+ moeda1)

   console.log("20:"+ cedula20)
   console.log("10:"+ cedula10)
   console.log("1:"+ moeda1)

   div.innerText = saida

}