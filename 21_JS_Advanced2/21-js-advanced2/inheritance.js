const human = {
    hobby: 'chess',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(john);
console.log(john.hobby);
john.__proto__ = human;
console.log(john);
console.log(john.hobby);
console.log(john.fullName());
john.hobby = 'cannabis';
console.log(john);
console.log(john.hobby);
Person.prototype = human;
const peter = new Person('Peter', 'Jackson');
const mary = new Person('Mary', 'Smith');
// peter.__proto__ = human;
// mary.__proto__ = human;
console.log(peter);
console.log(mary);
console.log(peter.fullName());
console.log(mary.fullName());
console.log('=================================');
Array.prototype.printArray = function(){
    for(let i = 0; i < this.length; i++ ){
        console.log(this[i]);
    }
    console.log('================================');
}
const numbers = new Array(2, 3, 5, 7, 11, 13);//[2, 3, 5, 7, 11, 13];
console.log(numbers);
numbers.printArray();
const arr = ['one', 'two', 'three'];
arr.printArray();
console.log('======= Array for-in ============');
for(let i in arr){
    console.log(arr[i]);
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}