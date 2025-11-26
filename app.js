// All book object will be stored in an array
// Add a separate function that can take some arguments, create a book from those arguments.
// All books should have a unique `id`
const $ = (params) => document.querySelector(params);

// Initial library
let library = [];

// Book constructor
function Book(title, author, pages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead),
    (this.id = self.crypto.randomUUID());
}

const book1 = new Book("Jojo's Bizarre Adventure", 'Hirohiko Araki', 280, true);
const book2 = new Book('Dragon Ball', 'Akira Toriyama', 500, false);
const book3 = new Book('Jujutsu Kaisen', 'Gege Akutami', 400, true);

library = [...library, book1, book2, book3];

// console.log(library);

// Display library function
const displayLibrary = (library) => {
  const libraryContainer = $('#library-container');

  const create = (ele) => document.createElement(ele);
  // console.log(libraryContainer);
  if (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }

  const ul = document.createElement('ul');
  // console.log(ul);

  library.forEach((item) => {
    const li = document.createElement('li');
    const title = document.createElement('p');
    const titleHL = create('span');
    // console.log(titleHL);
    titleHL.textContent = 'Title: ';
    title.append(titleHL, `${item.title}`);
    // console.log(title);
    // title.textContent = item.title;
    const author = create('p');
    const authorHL = create('span');
    authorHL.textContent = 'Author: ';
    author.append(authorHL, `${item.author}`);

    // console.log(title);
    const pages = create('p');
    const pagesHL = create('span');
    pagesHL.textContent = 'Pages: ';
    pages.append(pagesHL, `${item.pages}`);

    const read = create('p');
    const readStatus = item.isRead ? 'Already read' : 'Not yet read';
    read.append(readStatus);

    // Fucking delete button
    const deleteBtn = create('button');
    deleteBtn.textContent = 'Delete';

    // Fucking callback hell
    deleteBtn.addEventListener('click', () => {
      console.log('Fuck!');
      console.log(item.id);

      library = library.filter((book) => book.id !== item.id);

      displayLibrary(library);
    });

    li.append(title, author, pages, read, deleteBtn);

    ul.appendChild(li);

    //  console.log(ul);
  });

  libraryContainer.appendChild(ul);

  // console.log(libraryContainer)
};

displayLibrary(library);

// Add new book function
const addNewBook = (library) => {
  const form = $('#add-book-form');

  //  console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get all input fields
    const title = $('#input-title');
    const author = $('#input-author');
    const pages = $('#input-pages');
    const isRead = $('#input-is-read');

    // console.log(title.value)
    // console.log(author)
    // console.log(pages);
    // console.log(isRead.checked);

    // Construct a new Book object and concat to library array
    const newBook = new Book(
      title.value,
      author.value,
      +pages.value,
      isRead.checked
    );

    // console.log(newBook);

    library = [...library, newBook];

    displayLibrary(library);
  });
};

addNewBook(library);
