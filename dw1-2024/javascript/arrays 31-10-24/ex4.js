function allEquals(arr){
    eq = arr[0]
    fail = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == eq){
            fail+=0
        } else{
            fail++
        }
    }
    if(fail>0){
        return false
    }
    else return true
    
}


console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false
console.log(allEquals([2, 2, 2, 2, -2])); // Deve exibir: false

