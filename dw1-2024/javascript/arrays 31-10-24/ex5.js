function removeDuplicates(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

// Testando a função
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
