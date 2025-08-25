// JavaScript try...catch...finally Statement
// The try, catch and finally blocks are used to handle exceptions (a type of an error).

// types of errors in programming

// 1.syntax error

// example cotsn instead of const will throw an syntax error

// 2. runtime error

// This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.

// These errors that occur during runtime are called exceptions.

// suppose we have't define our function and try to call that function or invoke that function like function play()

// The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.

// If no error occurs, the code inside the try block is executed and the catch block is skipped.
// The throw statement lets you make your own errors.
// The finally statement lets you execute code after try and catch.
// The finally block runs regardless of the result of the try-catch block.

function checkAge() {
  const age = 15;
  try {
    if (age >= 18) {
      console.log("you are eligible for voting");
    } else if (age <= 18) {
      throw new Error("you are not eligible for voting");
    }
  } catch (error) {
    console.log(error.message);
  }
}

checkAge();

// another example with finally statements

const isStudentPassed = () => {
  let marks = 80;

  try {
    if (marks >= 35) {
      console.log("you have passed this examination");
    } else if (marks < 35) {
      throw new error("you have failed this examination");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("this will execute regardless of result ");
  }
};

isStudentPassed();
