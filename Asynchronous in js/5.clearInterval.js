// the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the clearInterval() method.

// The syntax of clearInterval() method is:

// clearInterval(intervalID);

// example

let intervalID;

const currentTime = () => {
  const time = new Date().toLocaleTimeString();
  console.log(time);
};

intervalID = setInterval(currentTime, 2000);

// this will run every after 2 second

// now we want to stop that function execution after some time

setTimeout(() => {
  clearInterval(intervalID);
  console.log("time stopped");
}, 10000);
