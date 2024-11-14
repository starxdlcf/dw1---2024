function sumArray(arr){
    sum = 0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum
}


console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10
console.log(sumArray([10, 1, 5, 9])); // Deve exibir: 25