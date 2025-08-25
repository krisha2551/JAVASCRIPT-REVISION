// As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

// Module is a file that contains code to perform a specific task. A module may contain variables, function, classes etc.

// you can export as many as modules using exports

// but you can export only one module  if you use default export

// example

export function function1() {
  return " this is function one";
}

// now if i want to import to this function module i can import using import at any file which i want to access or use this module

// import {function1} from Module.js  like that way , i can change name too.

// if i want to export more modules i can because i have't used yet default export

export function function2() {
  return "this is function two";
}
