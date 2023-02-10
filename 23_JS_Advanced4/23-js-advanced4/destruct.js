console.log('===== destruct array =====');
const arr = [2, 3, 5, 7, 11];
let [a, b, ...c] = arr;
console.log(a, b);
console.log(c);
console.log('==========');
fn(arr);
fn(c);
console.log('===== Trick =====');
let x = 20;
let y = 10;
console.log(x,y);
// let t = x;
// x = y;
// y = t;
[x, y] = [y, x];
console.log(x,y);
console.log('===== destruct object =====');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    'my hobby': 'chess'
}
let {firstName: fName, lastName, 'my hobby': hobby, ...rest} = person;
console.log(fName);
console.log(lastName);
console.log(rest);
console.log(hobby);
personInfo(person)
console.log(person['my hobby']);

function personInfo({lastName, age}) {
    console.log(`${lastName}, age: ${age}`);
    
}

function fn([a, b]) {
    console.log(a + b);
}