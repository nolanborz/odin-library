const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }

  static addBookToLibrary(book) {
    myLibrary.push(book); 
  }

  static displayBooks(bookArray) {
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
        <button onclick="Book.toggleReadStatus(${i})">Toggle Read Status</button>
        <button onclick="Book.removeBook(${i})">Remove</button>
      `;
      container.appendChild(bookCard);
    }
  }

  static toggleReadStatus(index) {
    myLibrary[index].toggleRead();
    this.displayBooks(myLibrary);
  }

  static displayBookAttribute(bookArray, bookAttribute) {
    return bookArray.map(book => book[bookAttribute]); // Fixed to properly access attribute
  }

  static removeBook(index) {
    myLibrary.splice(index, 1);
    this.displayBooks(myLibrary);
  }
}

// Event listener - outside the class
document.getElementById('new-book-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    parseInt(document.getElementById('pages').value),
    document.getElementById('read').checked
  );

  Book.addBookToLibrary(newBook);
  Book.displayBooks(myLibrary);
  this.reset();
});

// Initial books - outside the class
const initialBooks = [
  new Book("Treasure Island", "Robert Louis Stevenson", 246, true),
  new Book("Dracula", "Bram Stoker", 376, false),
  new Book("Catastrophe 1914: Europe Goes to War", "Max Hastings", 704, true),
  new Book("Strange Case of Dr Jekyll and Mr Hyde", "Robert Louis Stevenson", 141, true)
];

initialBooks.forEach(book => Book.addBookToLibrary(book));
Book.displayBooks(myLibrary);

const pages = document.getElementById("pages");
pages.addEventListener("input", (event) => {
  if (pages.validity.rangeUnderflow) {
    pages.setCustomValidity("Come on, no book is ONE page.");
  } else {
    pages.setCustomValidity("");
  }
});

