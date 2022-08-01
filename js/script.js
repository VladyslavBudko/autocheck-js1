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


// 32
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(isEven => isEven % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(isOdd => isOdd % 2 !==0);

const anyElementInSecondIsEven = secondArray.some(isEven => isEven % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(isOdd => isOdd % 2 !==0);

const anyElementInThirdIsEven = thirdArray.some(isEven => isEven % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(isOdd => isOdd % 2 !==0);
// 


//33 Change code below this line
const isAnyUserActive = users => {
  return users.some(user => user.isActive)
};
// Change code above this line


// 34
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;


// 35
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((averege, player) =>
player.playtime / player.gamesPlayed + averege, 0);


//36 Change code below this line
const calculateTotalBalance = users => users.reduce((total, user) => user.balance + total, 0);
// Change code above this line


//37 Change code below this line
const getTotalFriendCount = users => {
  return users.reduce((total, friend) => friend.friends.length + total, 0)
};
// Change code above this line


// 38
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// 39
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// 40
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// 41
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((bookA, bookB) => bookA.author.localeCompare(bookB.author));

const sortedByReversedAuthorName = [...books].sort((bookA, bookB) => bookB.author.localeCompare(bookA.author));

const sortedByAscendingRating = [...books].sort((a ,b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// 42