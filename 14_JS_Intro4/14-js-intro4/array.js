const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);
console.log(arr.length);
console.log(arr);
console.log('===== push =====');
arr.push(6, 7, 8);
console.log(arr);
console.log('===== pop =====');
let res = arr.pop();
console.log(arr);
console.log(res);
console.log('===== shift =====');
res = arr.shift();
console.log(arr);
console.log(res);
console.log('===== unshift =====');
arr.unshift(0, 1);
console.log(arr);
const arr1 = ['one', 'two', 'three'];
const arr2 = ['four', 'five'];
console.log('===== concat =====');
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('===== slice =====');
res = arr.slice(2, 6);
console.log(arr);
console.log(res);
console.log('===== splice =====');
//arr.splice(2, 2);
//arr.splice(1, 2, 10, 20, 30);
//arr.splice(3, 0, true);
//arr.splice(0, 1); //shift
//arr.splice(0, 0, -10); //unshift
//arr.splice(arr.length - 1, 1); //pop
arr.splice(arr.length, 0, 100500); //push
console.log(arr);