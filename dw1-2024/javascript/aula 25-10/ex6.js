function toSnakeCase(string) {
    string = string.toLowerCase()            
    string = string.split(' ')               
    string = string.join('_');              
    return string
  }

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
