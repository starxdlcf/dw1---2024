function countOccurrences(string, letter){
    let i = 0
    let occurrences = 0
    let numstr = string.length
    while(i<=numstr){
        if(string[i] == letter){
            occurrences++
        }
        i++
    }
    return occurrences
}


console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
console.log(countOccurrences("alcaparras são as rainhas do reino das plantas", "a")); //10