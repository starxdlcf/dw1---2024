function getInitials(string){
    string = string.toUpperCase();
    let lista = string.split(" ");
    let resposta;
    let contg = lista.length;
    let i = 0;
     while(i <= contg){
        let palavra = lista[i];
        let letra = palavra[0];
        resposta += letra
        i++
     }
     resposta = resposta.toString()
     return resposta

}


console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"