const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};


function addBookToLibrary(book) {
  myLibrary.push(book); 
}

function toggleRead(book) {
  console.log("I read " + book + "!");
}

function displayBooks(bookArray) {
  const container = document.getElementById('library-container');
  container.innerHTML = '';
  for (let i = 0; i < bookArray.length; i++) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${bookArray[i].title}</h3>
      <p>Author: ${bookArray[i].author}</p>
      <p>Pages: ${bookArray[i].pages}</p>
      <p>Status: ${bookArray[i].read ? "Already read" : "Not read yet"}</p>
      <button onclick="toggleReadStatus(${i})">Toggle Read Status</button>
      <button onclick="removeBook(${i})">Remove</button>
      `;
      container.appendChild(bookCard);
  }
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks(myLibrary);
}

function displayBookAttribute(bookArray, bookAttribute) {
  let arr = []
  for (let i = 0; i < bookArray.length; i++) {
    bookArray[i].bookAttribute
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);

}

document.getElementById('new-book-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    parseInt(document.getElementById('pages').value),
    document.getElementById('read').checked
  );

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
  this.reset();
});

let treasureIsland = new Book("Treasure Island", "Robert Louis Stevenson", 246, true);
let dracula = new Book("Dracula", "Bram Stoker", 376, false);
let catastrophe = new Book("Catastrophe 1914: Europe Goes to War", "Max Hastings", 704, true);
let jekyllAndHyde = new Book("Strange Case of Dr Jekyll and Mr Hyde", "Robert Louis Stevenson", 141, true);

addBookToLibrary(treasureIsland);
addBookToLibrary(dracula);
addBookToLibrary(catastrophe);
addBookToLibrary(jekyllAndHyde);

displayBooks(myLibrary);

