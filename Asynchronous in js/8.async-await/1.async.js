// Functions running in parallel with other functions are called asynchronous.

// Asynchronous functions take some time to complete.

// With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks in parallel.

// However, asynchronous programs can be difficult to write and debug.

// Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, asynchronous programming is solved using Promises and async-await.

// An async function always returns a Promise.

// JavaScript is a synchronous and single-threaded programming language.

// But you can perform asynchronous programming using callbacks, Promises, and async-await.

// async-await allows you to write asynchronous code in a synchronous manner.

// This makes the code more readable and easier to maintain.

// example

async function fetchingData() {
  console.log("Fetching data...");

  let dataAvailable = true;

  try {
    if (dataAvailable) {
      setTimeout(() => {
        console.log(" success : ", "data fetched successfully");
      }, 5000);
    } else {
      throw new Error(" something went wrong , no data available for fetching");
    }
  } catch (error) {
    console.log("error :", error.message);
  }
}

fetchingData();
