const submitButton = document.getElementsByClassName('submitButton')

let myLibrary = [];

//Book constructor
function book(title, author, pages, read) {
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

//Add new book to library array
function addBookToLibrary() {
    return myLibrary.push(new book(title, author, pages, read));
}

function submitForm() {
    const title = document.getElementsByClassName('title').value;
    const author = document.getElementsByClassName('author').value;
    const pages = document.getElementsByClassName('pages').value;
    const read = document.getElementsByClassName('read').checked;

    submitButton.addEventListener('click', event => {
         return addBookToLibrary(title, author, pages, read);
    });
}

//Modal
const modal = document.getElementById("modal1");
const addBookButton = document.getElementById("addBookButton");
const closeButton = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
addBookButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// const openEls = document.querySelectorAll('[data-open]');
// const isVisible = 'is-visible';

// for(const el of openEls) {
//     el.addEventListener('click', function() {
//         const modalId = this.dataset.open;
//         document.getElementById(modalId).classList.add(isVisible);
//     });
// }

// const closeEls = document.querySelectorAll('[data-close]');

// for (const el of closeEls) {
//     el.addEventListener('click', function() {
//         this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//     });
// }

// document.addEventListener('click', e => {
//     if(e.target == document.querySelector(".modal.is-visible")) {
//         document.querySelector('.modal.is-visible').classList.remove(isVisible);
//     }
// });







const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'true')
myLibrary.push(theHobbit)
console.log(myLibrary);