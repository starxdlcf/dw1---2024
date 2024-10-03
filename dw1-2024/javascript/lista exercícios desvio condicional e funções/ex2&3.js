
function ehTriangulo(lado1, lado2, lado3) {
    // desenvolver a função aqui
    if (lado1 < lado2 + lado3 && lado1 > Math.abs(lado2 - lado3)) {
        if (lado2 < lado1 + lado3 && lado2 > Math.abs(lado1 - lado3)) {
            if (lado3 < lado1 + lado2 && lado3 > Math.abs(lado1 - lado2)) {
                return true;
            }
        }
    }
}

function tipoTriangulo(lado1, lado2, lado3){
    let l1 = lado1
    let l2 = lado2
    let l3 = lado3
    if(ehTriangulo(l1, l2, l3)){
        if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
            console.log("Escaleno!")
        } else{
            if( lado1 == lado2 && lado2 == lado3){
                console.log("Equilátero")
            } else{
                if( lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
                    console.log("Isóceles")
                }
            }
        }
    }
    else{
        console.log("Não é triângulo!")
    }
}

// PROGRAMA PRINCIPAL

tipoTriangulo(20, 20, 15)

let l1 = 10;
let l2 = 20;
let l3 = 15;

if (ehTriangulo(l1, l2, l3)) {
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`);
} else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`);
}