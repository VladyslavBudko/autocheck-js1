function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    customerCredits = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }
    // Change code above this line
    return message;
  }
  