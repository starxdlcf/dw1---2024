
//captura os elementos html que serão manipulados pelo javascript
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaocalcular = document.getElementById("calcular")
botaocalcular.onclick = calculaImc

function calculaImc(){

    //entradas
    let peso = Number(inputPeso.value)
    let altura = Number(imputAltura.value)

    //saída
    let imc = peso/(altura*altura)

    divsaida.innerText = imc
}
