function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

const mix = firstArray.concat(secondArray);
console.log(mix);
return mix.slice(0, maxLength)

  // Change code above this line
}

makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);