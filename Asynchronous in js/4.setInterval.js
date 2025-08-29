// The setInterval() method repeats a block of code at every given timing event.

// The commonly used syntax of JavaScript setInterval is:

// setInterval(function, milliseconds);
// Its parameters are:
// function - a function containing a block of code
// milliseconds - the time interval between the execution of the function
// The setInterval() method returns an intervalID which is a positive integer.

// example

function currentTime() {
  let Time = new Date().toLocaleTimeString();

  console.log("Current time is :", Time);
}

// now i want to execute this function every given time

setInterval(currentTime, 1000);

// In the above program, the setInterval() method calls the currentTime() function every 1000 milliseconds(1 second).

// Hence the program displays the time once every 1 second.
