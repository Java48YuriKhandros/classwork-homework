const library = [];
//isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');
while(inputData){
    //TODO add to library only unique books
    inputData = prompt('Enter book data separate by ";"');
}
printLibrary(library);

function findBook(library, isbn){
    //TODO return index if book exists or -1
}

function printLibrary(library){
    //TODO print all books to console
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