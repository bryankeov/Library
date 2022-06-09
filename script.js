let myLibrary = [];

function book(title, author, pages, read) {  //Book constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(read === true) {
            return `${title} by ${author}, ${pages}, has read this book`;
        } else {
            return `${title} by ${author}, ${pages}, has not read this book yet`;
        }
    }
}
// Modal
const openEls = document.querySelectorAll('[data-open]');
const isVisible = 'is-visible';

for(const el of openEls) {
    el.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

const closeEls = document.querySelectorAll('[data-close]');

for (const el of closeEls) {
    el.addEventListener('click', function() {
        this.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener('click', e => {
    if(e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector('modal.is-visible').classList.remove(isVisible);
    }
});

function addBookToLibrary() {  //Input new book
    myLibrary.push(new book(title, author, pages, read));  //Add to array
}

function submitForm() {
    let title = document.getElementsByClassName('title').value;  //Take input
    let author = document.getElementsByClassName('author');
    let pages = document.getElementsByClassName('pages');
    let read = document.getElementsByClassName('read');
    addBookToLibrary(title, author, pages, read);
}

function resetForm() {
    const resetButton = document.getElementsByClassName('reset')
    resetButton.addEventListener('click', event => {
        document.getElementById('bookForm').reset()
    })
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'true')
myLibrary.push(theHobbit)
console.log(myLibrary);