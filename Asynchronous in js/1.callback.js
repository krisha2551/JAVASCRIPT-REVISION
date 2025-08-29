// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function.

// callback is function passed as an argument to another function
// using callback we can do asynchronous task in js
// a callback function it runs after another function has finished
// when you pass functions as an arguments don't use parenthesis

// callback example

function callbackFunc(result) {
  console.log("the total sum of number is :", result);
}

function totalSumOfNumbers(a, b, callBackFunc) {
  let result = a + b;
  callBackFunc(result);
}

totalSumOfNumbers(14, 10, callbackFunc);
