function replaceChar(string, letrasubs, letranova) {
    
    return string.split(letrasubs).join(letranova);
}


console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"
  