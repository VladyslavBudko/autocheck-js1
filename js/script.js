const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const arrayReturn = [];
  // console.log(propName);

  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      arrayReturn.push(product[propName]);
      // console.log("Product=  ", product);
    }
  }

  console.log(`ArreyReturn=  , ${propName}`, arrayReturn);
  return arrayReturn;

  // Change code above this line
}

getAllPropValues("name");
getAllPropValues("quantity");
getAllPropValues("price");
getAllPropValues("category");
