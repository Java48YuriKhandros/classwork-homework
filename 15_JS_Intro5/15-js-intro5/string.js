let x = '            Two beer or not two beer             ';
console.log(x);
x = x.trim();
console.log(x);
let res = x.split(' ');
console.log(res);
res = x.toUpperCase();//x.toLowerCase();
console.log(res);
res = x.length;
console.log(res);
res = x.charAt(2);
console.log(res);
res = x[2];
console.log(res);
res = x.indexOf('ee');
console.log(res);
res = x.lastIndexOf('ee');
console.log(res);
res = x.startsWith('two');
console.log(res);
res = x.substring(4,8);
console.log(res);
res = x.slice(4,8);
console.log(res);