const NAME_INPUT = document.querySelector("#name");
const AUTHOR_INPUT = document.querySelector("#author");
const PAGES_INPUT = document.querySelector("#pages");
const IS_READ_INPUT = document.querySelector("#isRead");
const ADD_BOOK_FORM = document.querySelector("#addBookForm");

const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.changeStatus = function() {
    if(this.isRead) {
        this.isRead = false;
    } else {
        this.isRead = true;
    }
}

ADD_BOOK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
})

//premade books

//display books

//add book

//change status

//delete book
