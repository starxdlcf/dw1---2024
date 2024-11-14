function countOccurrences(arr, pattern){
    occ = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == pattern) occ++
    }
    return occ
    
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2
console.log(countOccurrences([27, "banana", 18, "bannana", "banana", 18, 18, 18], "banana")); // Deve exibir: 2