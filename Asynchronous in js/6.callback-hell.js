// when asynchronous function depend on more asynchronous (like in deeper) it goes

// so if our first async function failed then after that depend async  function will never execute

// and when async function goes deeper code will growing horizontally instead of vertically

// due to that code readability will decrease these are the main problem with call back hell

// example of callback hell

function payment(amount, callback) {
  console.log(`Payment of ₹${amount} initiated.`);
  setTimeout(() => {
    if (amount > 0) {
      console.log(`₹${amount} deducted.`);
      callback(null, amount);
    } else {
      callback("Invalid payment amount.");
    }
  }, 1000);
}

function checkBalance(amount, callback) {
  console.log("Checking balance...");
  setTimeout(() => {
    if (amount <= 2000) {
      console.log("Sufficient balance.");
      callback(null, "Balance verified.");
    } else {
      callback("Insufficient balance.");
    }
  }, 1000);
}

function ifPaymentDone(amount, callback) {
  console.log("Finalizing payment...");
  setTimeout(() => {
    console.log(`Payment of ₹${amount} completed successfully.`);
    callback(null, "Payment done.");
  }, 1000);
}

// Demonstrating callback hell
payment(1500, (err, amount) => {
  if (err) {
    console.error(err);
  } else {
    checkBalance(amount, (err, status) => {
      if (err) {
        console.error(err);
      } else {
        ifPaymentDone(amount, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});

// Explanation of the Code
// Asynchronous Functions:

// payment(), checkBalance(), and ifPaymentDone() now use setTimeout to simulate asynchronous behavior.
// Callbacks with Error Handling:

// Each function accepts a callback that follows the common pattern of (err, result). If there's an error, it calls the callback with the error message; otherwise, it proceeds to the next function.
// Demonstrating Callback Hell:

// The nested structure shows how each function depends on the previous one, making the code grow horizontally and harder to read.

// to overcome this problem we can use promise
