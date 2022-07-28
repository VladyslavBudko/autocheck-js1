function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  calculateTotalPrice.forEach(function (orderedItems) {
    totalPrice += orderedItems;
  })

  // Change code above this line
  return totalPrice;
}