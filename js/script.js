function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}