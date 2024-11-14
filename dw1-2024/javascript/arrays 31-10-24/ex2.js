function findMax(arr){
    max = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
    
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10
console.log(findMax([-10, 27, 10, 5])); // Deve exibir: 27