const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
for (const product of products) {
if (productName === product.name) {
  return product.price * product.quantity;
}
}
return 0;

  // Пиши код выше этой строки
}
