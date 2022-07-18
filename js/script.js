function findLongestWord(string) {
  // Change code below this line

  // const wordArray = Array.from(arguments);

  const wordArray = string.split(" ");

  console.log(wordArray);

  let i = 0;
  let maxLength = 0;
  let numberOfElement = 0;
  let maxWord = '';

  console.log("length = ", wordArray.length);

  for (let i = 0; i < wordArray.length; i += 1) {
    if (maxLength < wordArray[i].length) {
      maxLength = wordArray[i].length;
maxWord = wordArray[i];

      console.log("element ", i);
      console.log("length", wordArray[i].length);

      let numberOfElement = i;
      console.log(wordArray[numberOfElement]);
    }
  }

  console.log("max word is", maxWord);
  return maxWord;

  // Change code above this line
}

findLongestWord("The quick brown fox jumped over the lazy dog");


