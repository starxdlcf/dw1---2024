function isPalindrome(string){
    let spString = string.split("");
    let revString = spString.reverse();
    let fString = revString.join("");

    if(string == fString){
        return true
    } else{
        return false
    }
    
}


console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false