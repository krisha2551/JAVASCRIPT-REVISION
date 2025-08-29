// in setTimeOut the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

// example

let stop; // Declare the stop variable to store the timer ID

const currentTime = () => {
  // Return the current date and time
  let dateAndTime = new Date();

  let time = dateAndTime.toLocaleTimeString();

  console.log(time);

  // Schedule the next execution and store the timer ID in 'stop'
  stop = setTimeout(currentTime, 3000);
};

// Start the initial call
currentTime();

// Stop the timer after 10 seconds
setTimeout(() => {
  clearTimeout(stop);
  console.log("Timer stopped");
}, 10000);
