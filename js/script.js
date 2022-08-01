//25  Change code below this line
const getFriends = (users) => users
    .flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index);
// Change code above this line


//26  Change code below this line
const getActiveUsers = (users) => users.filter(user => user.isActive);
   
// Change code above this line


