const refreshDataFromBooks = () => {
  const bookUncompleted = document.getElementById(STATUS_UNCOMPLETED_BOOK_ID);
  let bookCompleted = document.getElementById(STATUS_COMPLETED_BOOK_ID);

  for (data of books) {
    const newBook = makeBook(data.title, data.author, data.year, data.isCompleted);
    newBook[BOOK_ITEM] = data.id;

    if (data.isCompleted) {
      bookCompleted.append(newBook);
    } else {
      bookUncompleted.append(newBook);
    }
  }
};

const loadDatafromStorage = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(serializedData);

  if (data !== null) {
    books = data;
  }
};

const checkStorage = () => {
  if (typeof Storage == undefined) {
    alert('Your Browser not support web storage');
    return false;
  }

  return true;
};

const SaveData = () => {
  const parseData = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parseData);
};

const updateDataToStorage = () => {
  if (checkStorage()) SaveData();
};

const composeBookObject = (title, author, year, isCompleted) => {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isCompleted,
  };
};
