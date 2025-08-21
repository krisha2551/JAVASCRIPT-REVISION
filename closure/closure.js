// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// A function that remembers and can access variables from its outer scope, even after that outer function has finished executing.

function outer() {
  let count = 0;

  return function inner() {
    count++;

    return count;
  };
}

const counter = outer();

console.log(counter);

console.log(counter());

console.log(counter());
