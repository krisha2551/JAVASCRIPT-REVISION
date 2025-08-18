// Shorter syntax

// No need for the function keyword.

// If the function has only one expression, {} and return can be omitted.

// No this binding

// Arrow functions don’t have their own this.

// They use this from the scope where they were created (lexical this).

// This makes them useful in callbacks where you want to preserve this.

// No arguments object

// Arrow functions don’t have their own arguments object.

// Cannot be used as constructors

// You can’t use new with arrow functions.

greeting();

// function declaration

function greeting() {
  console.log("hello");
}

// function expression

let greeting2 = () => console.log("hello");

greeting2();
