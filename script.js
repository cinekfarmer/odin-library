const BOOKSHELF_TABLE = document.querySelector('#bookshelf');
const NAME_INPUT = document.querySelector('#name');
const AUTHOR_INPUT = document.querySelector('#author');
const PAGES_INPUT = document.querySelector('#pages');
const IS_READ_INPUT = document.querySelector('#isRead');
const ADD_BOOK_FORM = document.querySelector('#addBookForm');

let myLibrary = [];

class Book {
    _id;
    _name;
    _author;
    _pages;
    _isRead;

    constructor(name, author, pages, isRead) {
        this._id = crypto.randomUUID();
        this._name = name;
        this._author = author;
        this._pages = pages;
        this._isRead = isRead;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get isRead() {
        return this._isRead;
    }

    changeStatus() {
        this._isRead = !this._isRead;
    }
}

ADD_BOOK_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
})

premadeBooks();

function premadeBooks() {
    myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
    myLibrary.push(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false));
    myLibrary.push(new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, true));
    displayBooks(myLibrary);
}

function displayBooks(bookList) {
    let HTML = `<tr><th>Name</th><th>Author</th><th>Pages</th><th>Read</th></tr>`
    for (const book of bookList) {
        let isReadTxt = book.isRead ? 'Yes' : 'No';

        HTML += `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${isReadTxt}</td>
            <td data-book="${book.id}"><button class="modify-button">Modify</button>
            <button class="delete-button">Delete</button></td>
        </tr>`
    }
    BOOKSHELF_TABLE.innerHTML = HTML;
    addListeners();
}

function addListeners(){
    const MODIFY_BUTTONS = document.querySelectorAll('.modify-button');
    const DELETE_BUTTONS = document.querySelectorAll('.delete-button');

    for (const button of MODIFY_BUTTONS) {
        button.addEventListener('click', () => {
            let bookId = button.parentElement.dataset.book;
            changeBookStatus(myLibrary, bookId);
        })        
    }
    for (const button of DELETE_BUTTONS) {
        button.addEventListener('click', () => {
            let bookId = button.parentElement.dataset.book;
            deleteBook(myLibrary, bookId);
        })
    }
}

function changeBookStatus(bookList, bookId) {
    bookList.find(book => book.id === bookId).changeStatus();
    displayBooks(myLibrary);
}

function deleteBook(bookList, bookId) {
    myLibrary = bookList.filter(book => book.id !== bookId);
    displayBooks(myLibrary);
}

function addBook() {
    myLibrary.push(
        new Book(
            NAME_INPUT.value,
            AUTHOR_INPUT.value,
            PAGES_INPUT.value,
            IS_READ_INPUT.checked)
    )
    displayBooks(myLibrary);
}
