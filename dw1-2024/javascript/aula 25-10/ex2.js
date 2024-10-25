function countVowels(string){
    let vogais = 0
    let i = 0
    let numstr = string.length

    string = string.toLowerCase()

    while(i<=numstr){

        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            vogais++
        }
    }

    return vogais
}


console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3