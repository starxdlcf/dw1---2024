function getInitials(string){
    string = string.toUpperCase();
    let lista = string.split(" ");
    let resposta;
    let contg = lista.length;
    let i = 0;
    let r = 0
    console.log(lista)
    console.log(lista[0])
    console.log(lista[0][0])
     while(i <= contg){
        resposta = lista[i][0]
        r += resposta
        i++
     }
     return r

}


console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"