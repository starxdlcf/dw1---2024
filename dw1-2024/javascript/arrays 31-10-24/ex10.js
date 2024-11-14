function findIndex(arr, ver){
    idx = -1
    for(let i=0; i<arr.length; i++){
        if(arr[i] == ver){
            idx=i
        }
    }
    
    return idx
    
}

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1