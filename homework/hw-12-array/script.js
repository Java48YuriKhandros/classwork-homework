const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes);
console.log('======================================');
reverseArray(primes);
printArray(primes); //19,17,13,11,7,5,3,2
console.log('======================================');
let index = search(primes, 13);
console.log(index); //2
console.log('======================================');
index = search(primes, 1);
console.log(index); //-1

function printArray(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function reverseArray(arr) {

    for(let i=0; i<(arr.length-1)/2; i++){
    temp = arr[(arr.length-1)-i];
    arr[(arr.length-1)-i] = arr[i];
    arr[i] = temp;    
    }
    // return arr;
}

function search(arr, value) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }       
    }
    return -1;
}

