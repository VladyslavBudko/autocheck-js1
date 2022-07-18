function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const messageArrey = message.split(" ");
  console.log(messageArrey);
  const messageNum = messageArrey.length;
  console.log(messageNum);
  const price = (messageNum * pricePerWord);
  console.log(price);

  return price;
  // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);