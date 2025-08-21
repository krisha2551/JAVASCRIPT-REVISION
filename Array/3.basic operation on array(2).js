// adding element to an array

// adding element to an array in last

const fruits = ["apple", "banana", "orange", "guava", "cherry"];

console.log("fruits array before", "and  their length", fruits.length, fruits);

// now adding en element into an array

fruits.push("strawberry");

console.log("fruits array after", "and  their length", fruits.length, fruits);

// adding element to an array from the starting

fruits.unshift("mango");

console.log("fruits array", "and its length", fruits.length, fruits);

// Removing Elements from an Array

// To remove the elements from an array we have different methods like pop(), shift(), or splice().

// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

// pop() method example

console.log("fruits elements and their length", fruits.length, fruits);

// removing elements from an array from last

fruits.pop();

console.log(
  "fruits elements after removing last element and their length",
  fruits.length,
  fruits
);

// removing elements from an array from th start

console.log("fruits elements and their length", fruits.length, fruits);

fruits.shift();

console.log(
  "fruits elements after removing first element and its length",
  fruits.length,
  fruits
);

// The splice() method adds and/or removes array elements.

// The splice() method
// overwrites the original array.

console.log("fruits elements and their length", fruits.length, fruits);

// adding elements in fruit array from second index

fruits.splice(2, 0, "watermelon", "grapes");

// here 2 is for index position and after that 0 is if you want to remove the element of an array from the defined index position

console.log(
  "fruits elements and their length after adding new 2 elements and not removing",
  fruits.length,
  fruits
);

// removing elements from fruit array

console.log("fruits elements and their length", fruits.length, fruits);

fruits.splice(5, 2);

console.log(
  "fruits elements and their length after removing 2 elements",
  fruits.length,
  fruits
);

// what if we try to remove the element beyond it's length let's try

fruits.splice(8, 10);

console.log("fruits elements and their length", fruits.length, fruits); //(no effect since the index is beyond the array length
