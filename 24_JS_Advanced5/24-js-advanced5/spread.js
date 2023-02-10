console.log('===== Array Spread =====');
const arr1 = [2, 3, 5];
const arr2 = [7, 11];
// const arrClone = [];
// arr1.forEach(e => arrClone.push(e));
// console.log(arr1);
// console.log(arrClone);
// arrClone.length = 0;
// console.log(arr1.length);
const arrClone = [...arr1];
console.log(arr1);
console.log(arrClone);
arrClone.length = 0;
console.log(arr1.length);
//const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, -1, ...arr2, -2];
console.log(arr3);
let res = Math.min(...arr3);
console.log(res);
console.log('===== Object Spread =====');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
// const personClone = person;
// console.log(personClone === person);
const job = {
    company: 'Motorola',
    position: 'developer'
}
const personClone = { age: 28, ...person, hobby: 'chess', ...job };
console.log(person);
console.log(personClone);
const legacyClone = Object.assign({}, person, job, { hobby: 'vodka', age: 45 });
console.log(legacyClone);
let firstName = 'Peter';
let lastName = 'Jackson';
const peter = {
    firstName, lastName
}
console.log(peter);
