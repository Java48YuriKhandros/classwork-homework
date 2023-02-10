const persons = [];

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (persons.findIndex(item => item.id === person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        clearStats();
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDelete(function () {
            const index = persons.findIndex(item => item.id === person.id);
            persons.splice(index, 1);
            clearStats();
        });
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = age.value = '';
};

calcStats.onclick = function () {
    const divStats = document.createElement('div');
    try {
        let age = persons.reduce((accum, p) => accum + p.getAge(), 0) / persons.length;
        const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        age = persons.reduce((min, p) => p.getAge() < min ? p.getAge() : min, persons[0].getAge());
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = persons.reduce((max, p) => p.getAge() > max ? p.getAge() : max, persons[0].getAge());
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        divStats.append(h3avg, h3min, h3max);
    } catch (e) {
        const h3error = createInfoElement(`No data for processing`, 'h3');
        divStats.append(h3error);
    }
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.appendChild(divStats);
    }
};

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

function Person(id, firstName, lastName, date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(date);
    this.getAge = function(){
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    };
    this.toString = function () {
        return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.getAge()}`;
    }
}