// Change code below this line
const getFriends = (users) => users
    .flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index);
// Change code above this line
