let books = [];
const STORAGE_KEY = 'BOOK_APPS';
const STATUS_UNCOMPLETED_BOOK_ID = 'unread';
const STATUS_COMPLETED_BOOK_ID = 'read';
const BOOK_ITEM = 'itemId';

const AddBook = () => {
  const uncompletedBook = document.getElementById(STATUS_UNCOMPLETED_BOOK_ID);
  const dataTitle = document.getElementById('title').value;
  const dataAuthor = document.getElementById('author').value;
  const dataYear = document.getElementById('year').value;
  const book = makeBook(dataTitle, dataAuthor, dataYear, false);
  const bookObject = composeBookObject(dataTitle, dataAuthor, dataYear, false);

  book[BOOK_ITEM] = bookObject.id;
  books.push(bookObject);
  uncompletedBook.append(book);

  SaveData();
};

const makeBook = (dataTitle, dataAuthor, dataYear, isCompleted) => {
  const image = document.createElement('img');
  if (isCompleted) {
    image.setAttribute('src', '../../Assets/Img/read.png');
  } else {
    image.setAttribute('src', '../../Assets/Img/unread.png');
  }

  const imageBook = document.createElement('div');
  imageBook.classList.add('image-book');
  imageBook.append(image);

  const bookTitle = document.createElement('h4');
  bookTitle.innerText = dataTitle;

  const authorName = document.createElement('h6');
  authorName.innerText = dataAuthor;

  const bookYear = document.createElement('h6');
  bookYear.innerText = dataYear;

  const btnStatus = document.createElement('div');
  btnStatus.classList.add('btn-status');

  if (isCompleted) {
    btnStatus.append(unreadButton(), deleteButton());
  } else {
    btnStatus.append(readButton(), deleteButton());
  }

  const detailBook = document.createElement('div');
  detailBook.classList.add('detail-book');
  detailBook.append(bookTitle, authorName, bookYear, btnStatus);

  const container = document.createElement('div');
  container.classList.add('list-container');
  container.append(imageBook, detailBook);

  return container;
};

const unreadButton = () => {
  return createButton('unread-button', function (event) {
    bookStatus(event.target.parentElement.parentElement.parentElement);
  });
};

const readButton = () => {
  return createButton('read-button', function (event) {
    bookStatus(event.target.parentElement.parentElement.parentElement);
  });
};

const deleteButton = () => {
  return createButton('trash-book', function (event) {
    removeBook(event.target.parentElement.parentElement.parentElement);
  });
};

const removeBook = (bookElement) => {
  const bookPosition = findBookIndex(bookElement[BOOK_ITEM]);
  books.splice(bookPosition, 1);
  bookElement.remove();
  updateDataToStorage();
};

const createButton = (buttonTypeClass, eventListener) => {
  const button = document.createElement('button');
  button.classList.add(buttonTypeClass);
  button.addEventListener('click', function (event) {
    eventListener(event);
  });

  switch (buttonTypeClass) {
    case 'read-button':
      button.innerText = 'Selesai dibaca';
      break;
    case 'unread-button':
      button.innerText = 'Belum selesai dibaca';
      break;
    default:
      button.innerText = 'Hapus buku';
  }

  return button;
};

const bookStatus = (bookElement) => {
  const book = findBook(bookElement[BOOK_ITEM]);
  const dataTitle = bookElement.querySelector('.detail-book > h4').innerText;
  const dataAuthor = bookElement.querySelector('.detail-book > h6').innerText;
  const dataYear = bookElement.querySelector('.detail-book > h6').nextSibling.innerHTML;

  if (book.isCompleted === true) {
    var listUncompleted = document.getElementById(STATUS_UNCOMPLETED_BOOK_ID);
    var newBook = makeBook(dataTitle, dataAuthor, dataYear, false);
    book.isCompleted = false;
    listUncompleted.append(newBook);
  } else {
    var bookCompleted = document.getElementById(STATUS_COMPLETED_BOOK_ID);
    var newBook = makeBook(dataTitle, dataAuthor, dataYear, true);
    book.isCompleted = true;
    bookCompleted.append(newBook);
  }

  newBook[BOOK_ITEM] = book.id;
  bookElement.remove();
  updateDataToStorage();
};

const findBook = (bookId) => {
  for (data of books) {
    if (data.id === bookId) return data;
  }

  return null;
};

const findBookIndex = (bookId) => {
  let index = 0;
  for (data of books) {
    if (data.id === bookId) return index;
    index++;
  }

  return -1;
};
