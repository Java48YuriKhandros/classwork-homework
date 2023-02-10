const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
}

const showName = (greeting) => {
    const res = `${greeting} ${this.firstName} ${this.lastName}`;
    return res;
}

const circleLength = function (r) {
    const pi = 3.1415926;
    const len = 2 * pi * r;
    return len;
}
const fn1 = circleLength;

john.fullName = showName;
peter.fullName = showName;

console.log(john.fullName('Mr.'));
console.log(peter.fullName('Mr.'));
console.log(showName());
