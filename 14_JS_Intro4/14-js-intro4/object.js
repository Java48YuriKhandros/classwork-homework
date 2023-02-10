const person = {
    firstName: 'John',
    lastName: "Smith",
    age: 27,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.age = 36;
console.log(person.age);
console.log(person);
console.log(person.fullName());
console.log(person.hobby);
person.hobby = 'chess';
console.log(person.hobby);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
const mary = new Person('Mary', 'Smith', 18);
console.log(mary);
console.log(mary.fullName());
console.log('========================');
delete person.hobby;
console.log(person.hobby);
console.log(person['lastName']);
person['age'] = 22;
console.log(person.age);
let key = 'firstName';
console.log(person[key]);
const rabindranat = {
    firstName: 'Rabindranat',
    lastName: 'Ivanov',
    'age': 41,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    'best hobby': 'chess'
}
console.log(rabindranat["best hobby"]);
console.log('========== for-in ==============');
printObject(rabindranat);
printObject(mary);

function printObject(obj){
    for(let k in obj){
        if(typeof obj[k] !== 'function'){
            console.log(`${k} -> ${obj[k]}`);
        }else{
            console.log(`${k} -> ${obj[k]()}`);
        }
       
    }
    console.log('=========================');
}


function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}