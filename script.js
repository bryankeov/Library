let myLibrary = [];

function book(title, author, pages, read) {  //Book constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(read == true) {
            return `${title} by ${author}, ${pages}, has read this book`;
        } else {
            return `${title} by ${author}, ${pages}, has not read this book yet`;
        }
    }
}
// function submit() {
//     document.getElementById('bookForm').submit();
// }

function addBookToLibrary() {  //Input new book
    let title = document.getElementsByClassName('title');  //Take input
    let author = document.getElementsByClassName('author');
    let pages = document.getElementsByClassName('pages');
    let read = document.getElementsByClassName('read');


    const newBook = new book(title, author, pages, read);  //Run through constructor
    myLibrary.push(newBook);  //Add to array
}

function resetForm() {
    document.getElementsByClassName('reset').reset();
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'true')
myLibrary.push(theHobbit)
console.log(myLibrary);