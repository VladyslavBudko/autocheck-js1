function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  firstArray.forEach( (elem1) => {
    if (secondArray.includes(elem1)) {
      commonElements.push(elem1);
    }
  });

  return commonElements;
  // Change code above this line
}
