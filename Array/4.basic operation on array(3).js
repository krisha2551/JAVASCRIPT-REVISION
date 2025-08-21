// calculating array length

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log("fruits length: ", fruits.length);

// Increase and Decrease the Array Length

console.log("fruits element and their length before: ", fruits.length, fruits);

// increase length

fruits.length = 10;

console.log(
  "fruits element and its length after increasing: ",
  fruits.length,
  fruits
);

// decrease length

fruits.length = 4;

console.log(
  "fruits element and its length after decreeing: ",
  fruits.length,
  fruits
);
