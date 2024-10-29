function capitalizeWords(string) {
    return string
      .split(' ')
      .map(palavra => palavra[0].toUpperCase() + palavra.slice(1))
      .join(' ');
}
console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"
  