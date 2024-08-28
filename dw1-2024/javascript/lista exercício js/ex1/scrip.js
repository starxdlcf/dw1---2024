
let botao = document.getElementById("botao")

let s = document.getElementById("div")
function jurosCompostos(){
    let c = Number(document.getElementById("capital").value)
    let t = Number(document.getElementById("taxa").value)
    let p= Number(document.getElementById("periodo").value)

   let M = c * (1 + t/100)**p
   s.innerText = M
   console.log(M)
}