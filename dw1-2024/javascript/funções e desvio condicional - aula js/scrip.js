//funções

function soma(a, b) {
    return a + b;
}

soma(10, 20, 30, 40, 50);

//desvio condicional

let numero = 100

if (numero%2 == 0){
    console.log(`par ${numero/2}`)
} else {
    console.log("ímpar")
}

//outra forma

let tipo = numero%2 == 0 ? "par":"impar";