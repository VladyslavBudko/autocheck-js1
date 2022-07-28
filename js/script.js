function changeEven(numbers, value) {
  // Change code below this line
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }

  const newArray = [];

  numbers.forEach((element) => {
    // if (element % 2 === 0) {
    //   newArray.push(element + value);
    // } else {
    //   newArray.push(element);
    // }

    element % 2 === 0 ? newArray.push(element + value) : newArray.push(element);
  });

  return newArray;
  // Change code above this line
}
