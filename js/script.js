// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(
//      ({friends}) => friends = friendName);
    
// };
// // Change code above this line


// const getUsersWithFriend = (users, friendName) => {
//   users.filter(user => {
//       let userFriends = [...user.friends];
//       userFriends.filter(friend) => {
//         if friend === friendName
//               return user;
//       }
//   })
// };



const getUsersWithFriend = (users, friendName) => {
  users.filter(user => {
      [...user.friends].filter(friend => {
        if friend === friendName
              return user;
      })
  })
};