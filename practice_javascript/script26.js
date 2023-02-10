// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5+''));

const num = 5;

console.log("https://vc.com/catalog/" + num);

const fontSize = 26 + 'px';

// to Number

// 1)
console.log(typeof(Number('4')));

// 2)

console.log(typeof(Number(+'5')));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN; - false

let switcher = null;

if(switcher) {
    console.log('working...');
}

switcher = 1;
if(switcher) {
    console.log('working...');
}

//  2)

console.log(typeof(Boolean('4')));
console.log(typeof(!!'4'));
