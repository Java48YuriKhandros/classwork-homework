const root = document.getElementById('root');
const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    const arr = inputData.split(';');
    if (findBook(library, arr[0]) === -1) {
        const book = new Book(arr[0], arr[1], arr[2], arr[3]);
        library.push(book);
    }
    inputData = prompt('Enter book data separate by ";"');
}
printLibrary(library);

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function printLibrary(library) {
    const list = document.createElement('ol');
    root.appendChild(list);
    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        list.appendChild(li);
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode(`Book ${i + 1}`);
        h2.appendChild(h2Text);
        const p = document.createElement('p');
        const text = document.createTextNode(library[i].toString());
        p.appendChild(text);
        li.append(h2, p);
       
    }

}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, 
        Author: ${this.author}, Year of publishing: ${this.year}`
    }
}