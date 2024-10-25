function reverseString(string){

    let stringDividida = string.split("");
    let stringInvertida = stringDividida.reverse();
    let stringFinal = stringInvertida.join("")

    return stringFinal
}


console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"