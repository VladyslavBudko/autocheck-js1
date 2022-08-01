//25  Change code below this line
const getFriends = (users) => users
    .flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index);
// Change code above this line


//26  Change code below this line
const getActiveUsers = (users) => users.filter(user => user.isActive);
   
// Change code above this line


//27 Change code below this line
const getInactiveUsers = users => 
  users.filter(user => !user.isActive)

// v2
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};





// 28 Change code above this line

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);



//29 Change code below this line
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};


// v2
const getUserWithEmail = (users, email) => users.find(user => user.email === email);



//30 Change code above this line


const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(isEven => isEven % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(isOdd => isOdd % 2 !==0
);

const eachElementInSecondIsEven = secondArray.every(isEven => isEven % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(isOdd => isOdd % 2 !==0);

const eachElementInThirdIsEven = thirdArray.every(isEven => isEven % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(isOdd => isOdd % 2 !==0);
// 

//31 Change code below this line
const isEveryUserActive = (users) => users.every(user => user.isActive)
// Change code above this line


