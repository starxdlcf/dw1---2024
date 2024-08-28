
//captura os elementos html que serão manipulados pelo javascript
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaocalcular = document.getElementById("calcular")
botaocalcular.onclick = calculaImc()

function calculaImc(){
    console.log(inputAltura)

    //entradas
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    //saída
    let imc = peso/(altura*altura)

    // divSaida.innerText = imc
}
