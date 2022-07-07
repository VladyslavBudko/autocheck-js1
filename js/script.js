function checkForSpam(message) {
  let result;
  // Change code below this line
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
