const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr);
printArray(arr); // 0,1,1,2,2,2,4,5,9,9
const persons = [new Person('Mary', 'Smith', 18), new Person('John', 'Smith', 34),
new Person('Peter', 'Jackson', 31), new Person('Tigran', 'Petrosian', 28)];
printArray(persons); 
bubbleSortPersonsByAge(persons);
printArray(persons); 

function printArray(arr) {
    // TODO
}

function bubbleSort(arr) {
    // TODO
}

function bubbleSortPersonsByAge(arr) {
    // TODO
}

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}