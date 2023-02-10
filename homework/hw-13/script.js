const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
console.log("================================================");
bubbleSort(arr);
printArray(arr); // 0,1,1,2,2,2,4,5,9,9
console.log("================================================");
const persons = [new Person('Mary', 'Smith', 18), new Person('John', 'Smith', 34),
new Person('Peter', 'Jackson', 31), new Person('Tigran', 'Petrosian', 28)];
printArray(persons);
console.log("================================================");
bubbleSortPersonsByAge(persons);
printArray(persons); 

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSortPersonsByAge(arr){
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i].age > arr[i + 1].age) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.fullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
}