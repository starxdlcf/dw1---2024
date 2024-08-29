
let botao = document.getElementById("botao")

let s = document.getElementById("div")

function gasto(){
    let km = Number(document.getElementById("km").value)
    let auto = Number(document.getElementById("auto").value)
    let ped = Number(document.getElementById("ped").value)

   let estrada = km/auto* 5.50

   saida = ped + estrada

   console.log(saida)

   s.innerText = saida
}