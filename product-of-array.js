let array = [1,2,3,4];

multip = (arr)=>{
    let product = 1;
    arr.forEach(element => {
        product = element * product;
    });

    for(let i=0; i<arr.length; i++){
        arr[i] = product/arr[i];
    }
    return arr;
}

console.log(multip(array))