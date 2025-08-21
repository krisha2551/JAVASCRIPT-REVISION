// Accessing Elements of an Array

let fruits = ["apple", "banana", "orange", "mango", "strawberry", "cherry"];

console.log("fruits array: ", fruits);

// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

console.log("favorite fruits is ", fruits[3]);

// accessing first Element of an array

console.log("first fruits is", fruits[0]);

// accessing last element of an array

console.log("last fruits is", fruits[fruits.length - 1]);

//  Modifying the Array Elements

// fruits array before changing elements

console.log("fruits array second element before changing is :", fruits[1]);

fruits[1] = "guava";

console.log(
  "now we we have changed second element in fruits array :",
  fruits[1]
);
