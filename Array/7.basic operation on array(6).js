// JavaScript Array some() Method
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

function checkAge(age) {
  return age > 18;
}

let ages = [1, 2, 3, 12, 15, 18, 20];

let olderAge = ages.some(checkAge);

console.log(olderAge);

// Javascript Array reverse() method
// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numArray", numArray);

console.log("revering num array", numArray.reverse());

// Javascript Array values() method
// The values() method returns a new Array Iterator object that contains the values for each index in the array.

const numIterators = numArray.values();

for (let value of numIterators) {
  console.log(value);
}
