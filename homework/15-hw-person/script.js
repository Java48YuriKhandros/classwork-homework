//id;firstName;lastName;age
const persons = [];
let inputData = prompt('Enter person data separate by ","');
while (inputData) {
    const arr = inputData.split(',');
    if (findPerson(persons, arr[0]) === -1) {
        const person = new Person(arr[0], arr[1], arr[2], arr[3]);
        persons.push(person);
    } else {
        alert(`Person with id: ${arr[0]} exists`);
    }
    inputData = prompt('Enter person data separate by ","');
}
printPersons(persons);

function findPerson(persons, id) {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id === id) {
            return i;
        }
    }
    return -1;
}

function printPersons(persons) {
    for (let i = 0; i < persons.length; i++) {
        console.log(persons[i].toString());
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.fullName()}, Age: ${this.age}`
    }
}