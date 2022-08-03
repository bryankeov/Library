let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: '295 pages',
    read: true
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    pages: '384 pages',
    read: false
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    pages: '368 pages',
    read: false
  },
  {
    title: 'The Happiest Man on Earth',
    author: 'Eddie Jaku',
    pages: '300 pages',
    read: true
  },
];

const bookForm = document.getElementById('bookForm');
const cardContainer = document.getElementsByClassName('cardContainer')[0]


//Book constructor
class bookClass {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
    bookInfo() {
        if(read === true) {
          return `${title} by ${author}, ${pages}, has read this book`;
        } else {
          return `${title} by ${author}, ${pages}, has not read this book yet`;
        };
    };
}

//Add new book to library array
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new bookClass(title, author, pages, read));
  bookForm.reset();
  cardContainer.innerHTML = ""; //clear display to prevent duplication
  bookDisplay();
  console.log(myLibrary)
}

function submitForm() {
  bookForm.addEventListener('submit', (event) => {
    const title = document.getElementById('formTitle').value;
    const author = document.getElementById('formAuthor').value;
    const pages = document.getElementById('formPages').value;
    const read = document.getElementById('formRead').checked;  
        
    modal.style.display = "none";  //close modal
    event.preventDefault();  //block default form submit function
    addBookToLibrary(title, author, pages, read);
  });
}

const formValidation = document.querySelector('input');

formValidation.addEventListener('input', () => {
  formValidation.setCustomValidity('');
  formValidation.checkValidity();
});

formValidation.addEventListener('invalid', () => {
  if(formValidation.value === '') {
    formValidation.setCustomValidity('Enter your details!');
  };
})

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

//Book display
function bookDisplay() {
  for(let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i].title !== '') { //prevent dupe bug
      const card = document.createElement('div');
      card.classList.add('card');
      cardContainer.appendChild(card);

      const title = document.createElement('h3');
      title.textContent = myLibrary[i].title;
      title.classList.add('cardTitle');
      card.appendChild(title);

      const author = document.createElement('p');
      author.textContent = "Author: " + myLibrary[i].author;
      card.appendChild(author);

      const pages = document.createElement('p');
      pages.textContent = "Pages: " + myLibrary[i].pages;
      card.appendChild(pages);
                
      const read = document.createElement('p');
      read.classList.add('cardRead');
      if(myLibrary[i].read === true) {
        read.textContent = "Read Status: Read";
      } else {
        read.textContent = "Read Status: Not Read";
      }
      card.appendChild(read);

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');
      card.appendChild(buttonContainer);
      const readButton = document.createElement('button');
      readButton.classList.add('readButton');
      readButton.addEventListener('click', editBook);
      readButton.textContent = 'Read';
      buttonContainer.appendChild(readButton);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('deleteButton');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', deleteBook);
      buttonContainer.appendChild(deleteButton);
    }
  }
}

function editBook() {
  let readStatus = event.target.parentNode.parentNode.getElementsByClassName('cardRead')[0].innerHTML;
  let parentTitle = event.target.parentNode.parentNode.getElementsByClassName('cardTitle')[0].innerHTML;
    for( let i = 0; i < myLibrary.length; i++) {
      if(myLibrary[i].title == parentTitle) {
        if(myLibrary[i].read === false) {
        myLibrary[i].read = true;
        readStatus = "Read Status: Read";
      } else {
        alert('You have already read this book.')
      }
    }
  }
  cardContainer.innerHTML = ''
  bookDisplay()
}

function deleteBook() {
    let parentTitle = event.target.parentNode.parentNode.getElementsByClassName('cardTitle')[0].innerHTML;
    for( let i = 0; i < myLibrary.length; i++)
      if(myLibrary[i].title == parentTitle) {
        myLibrary.splice(i, 1);
        event.target.parentNode.parentNode.remove()
    }
}
bookDisplay();