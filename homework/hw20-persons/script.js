const persons = [];

//click Add person => add unique person to array persons and add person to
//ordered list id="personsList"

//click Get stats => add after <h2>Stats</h2>: average age, min age, max age

let persId = document.getElementById('personId'),
    persFirstName = document.getElementById('firstName'),
    persLastName = document.getElementById('lastName'),
    persAge = document.getElementById('age'),
    addPers = document.getElementById('addPerson'),
    calcStats = document.getElementById('calcStats'),
    persList = document.getElementById('personsList');

const personAdd = () => {
    const person = new Person(persId.value, persFirstName.value, persLastName.value, persAge.value);
    persons.push(person);
    persId.value = '';
    persFirstName.value = '';
    persLastName.value = '';
    persAge.value = '';

    const li = document.createElement('li');
    li.append(document.createTextNode(person.toString()));
    personsList.append(li);
};

addPers.addEventListener("click", personAdd);

function Stats() {
    const avarage = persons.reduce((sum, p) => sum + p.age, 0)/ persons.length;
    
    const min = persons.reduce((min, p) => Math.min(min,p.age),persons[0].age);
    const max = persons.reduce((max, p) => Math.max(max,p.age),persons[0].age);
    
    const statP = document.createElement('p');
    const statPText = document.createTextNode(`Avarage age: ${avarage.toFixed(1)}; Min age: ${min}; Max age: ${max};`);
    statP.append(statPText);
    stats.appendChild(statP);
}

calcStats.addEventListener('click', Stats);

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
}








