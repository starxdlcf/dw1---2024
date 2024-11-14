function reverseArray(arr){
    revarr = []
    for(let i=(arr.length)-1; i<=arr.length && i>=0; i--){
        revarr.push(arr[i])
    }
    return revarr
}


console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]

