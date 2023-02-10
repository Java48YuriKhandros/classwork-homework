const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

let arr = Object.keys(person);
console.log(arr);
arr.forEach(item => console.log(item));
console.log('=======================================');
arr = Object.values(person);
console.log(arr);
arr.forEach(item => console.log(item));
console.log('=======================================');
arr = Object.entries(person);
console.log(arr);
arr.forEach(item => console.log(item));