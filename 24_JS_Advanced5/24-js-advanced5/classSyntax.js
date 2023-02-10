class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }
    get id() {
        return this._id
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
    get birthDate() {
        return this._birthDate;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = +salary;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }
}

const john = new Person(1000, 'John', 'Smith', '2011-05-08');
console.log(john);
console.log(john.birthDate.getFullYear());
john.lastName = 'Jackson';
console.log(john.lastName);
console.log(john.age);
console.log(john.fullName());
const peter = new Employee(2000, 'Peter', 'Parker', '2001-01-01', 10000);
console.log(peter);
console.log(peter.salary);
peter.salary = 19000;
console.log(peter.salary);
console.log('===== Company =====');
const firm = new Company();
firm.addEmployee(peter);
firm.addEmployee(new Employee(3000, 'Mary', 'Smith', '2003-07-11', 20000));
firm.employees.forEach(e => console.log(e));
firm.employees.length = 1;
firm.employees.forEach(e => console.log(e));