const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
sort(arr, (n1, n2) => n1 - n2);
printArray(arr); // 0,1,1,2,2,2,4,5,9,9
const persons = [new Person('Mary', 'Smith', 18), new Person('John', 'Smith', 34),
new Person('Peter', 'Jackson', '31'), new Person('Tigran', 'Petrosian', 28)];
printArray(persons);
sort(persons, (p1, p2) => p1.age - p2.age);
printArray(persons);
sort(persons, (p1, p2) => {
    if (p1.lastName > p2.lastName) {
        return 1;
    }
    if (p1.lastName < p2.lastName) {
        return -1;
    }
    return 0;
}
);
printArray(persons);

function printArray(arr) {
    console.log('==========================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========================');
}

function sort(arr, comparator) {//let comparator = (p1, p2) => p1.age - p2.age);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] - arr[j + 1] > 0) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

function bubbleSortPersonsByAge(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].age - arr[j + 1].age > 0) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}