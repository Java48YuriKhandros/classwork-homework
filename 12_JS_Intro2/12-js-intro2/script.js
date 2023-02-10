let x = 5;
console.log(x);
console.log(typeof x);
x = '' + x; //String(x);
console.log(x);
console.log(typeof x);
x = '42';
console.log(x);
console.log(typeof x);
x = +x; // Number(x);
console.log(x);
console.log(typeof x);
let res = true / 2;
console.log(`result = ${res}`);
x = '3';
res = true + 2 + +x + 4;
console.log(`result = ${res}`);
res = 0 / 0;
console.log(res);
console.log(typeof res);
if (isNaN(res)) {
    console.log(';)');
}
x = 1;
x = !!x; // Boolean(x);
console.log(x);
console.log(typeof x);
let str = 0;
//let nickName = str || 'Anonymous';
let nickName = str ?? 'Anonymous';
console.log(`nickname: ${nickName}`);
greeting('Rabindranat');
greeting();

function greeting(name = 'Anonymous'){
 //   name = name || 'Anonymous';
    console.log(`Hello ${name}`);
}