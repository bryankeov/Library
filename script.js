let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: '295 pages',
        read: 'true'
    },
    {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        pages: '384 pages',
        read: 'false'
    },
    {
        title: 'The Song of Achilles',
        author: 'Madeline Miller',
        pages: '368 pages',
        read: 'false'
    },
    {
        title: 'The Happiest Man on Earth',
        author: 'Eddie Jaku',
        pages: '300 pages',
        read: 'true'
    },
];



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
function addBookToLibrary(title, author, pages, read) {
    return myLibrary.push(new book(title, author, pages, read));
}

function submitForm() {
    const submitButton = document.getElementsByClassName('submitButton');

    submitButton.addEventListener('click', event => {
        const title = document.getElementsByClassName('title').value;
        const author = document.getElementsByClassName('author').value;
        const pages = document.getElementsByClassName('pages').value;
        const read = document.getElementsByClassName('read').checked;
        
        event.preventDefault();
        modal.style.display = "none";
        return console.log(addBookToLibrary(title, author, pages, read));
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

//Book display
function bookDisplay() {
    for(let i = 0; i < myLibrary.length; i++) {
        const cardContainer = document.getElementsByClassName('cardContainer')[0];
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);

            const title = document.createElement('h3');
            title.textContent = myLibrary[i].title;
            card.appendChild(title);

            const author = document.createElement('p');
            author.textContent = "Author: " + myLibrary[i].author;
            card.appendChild(author);

            const pages = document.createElement('p');
            pages.textContent = "Pages: " + myLibrary[i].pages;
            card.appendChild(pages);
            
            const read = document.createElement('p');
                if(myLibrary[i].read === 'true') {
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
                readButton.textContent = 'Read';
                buttonContainer.appendChild(readButton);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.textContent = 'Delete';
                buttonContainer.appendChild(deleteButton);
    }
}
bookDisplay()
console.log(myLibrary);