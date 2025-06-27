
const myLibrary = [];


const addButton = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");
const form = document.querySelector(".bookForm");
const libraryBooks = document.querySelector(".books-list")

const titleInput = document.getElementById("bookTitle")
const authorInput = document.getElementById("bookAuthor")
const pagesInput = document.getElementById("bookPages")
const readInput = document.getElementById("bookRead")



// Book constructor
function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

// create a book object and add to library array
function addBookToLibrary(author, title, pages, read) {
    let id = crypto.randomUUID();

    let aBook = new Book(author,  title, pages, read, id)

    myLibrary.push(aBook);
}

// displaying books as list
function displayBooks() {
    myLibrary.forEach(item => console.log(item))

    let newBook = document.createElement("li");

    myLibrary.forEach(book => {
        newBook.textContent = `Title: ${book.title}
                            Author: ${book.author}
                            Pages: ${book.pages}
                            Read: ${book.read}`
        libraryBooks.appendChild(newBook);
    })
}


const results = document.querySelector(".results");

addButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData)

    if (formProps.read === "read") {
        formProps.read = true;
    } else {
        formProps.read = false;
    }

    console.log(formProps)

    addBookToLibrary(formProps.author, formProps.title, formProps.pages, formProps.read)

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;

    console.log(myLibrary)
    displayBooks();
})
