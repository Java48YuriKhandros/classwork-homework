//int[] arr = new int[5]
//int[] arr = {2,3,5,7}
const arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
console.log(arr.length);
//arr = null;
arr[3] = 4;
console.log(arr[3]);
console.log(typeof arr[3]);
console.log(arr);
printArray(arr)
arr[arr.length] = 100500;
arr[arr.length] = 42;
console.log(arr.length);
printArray(arr);
console.log(arr.length);
arr.length = 3;
printArray(arr);
console.log(arr);

function printArray(arr) {
    console.log('===========================');
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('===========================');
}