// ‘A JavaScript String is a sequence of characters, typically used to represent text.

// we can write our string using '', and "" quote

// example

let name = "krisha"; // here shivam is a string data

//  strings methods example

let text = "hello krisha";

console.log("text:" + text);

// charAt() method  ==> returns the character at specified index(position) counting from zero

console.log("char at:" + text.charAt(6));

// concat() method ==> returns two or more joint strings

console.log("joined strings:" + text.concat(" good morning"));

// endsWith() method ==> returns true if the string ends with a specified value

console.log("ends with:" + text.endsWith("m"));

// includes() method ==> returns true if the string contains a specified value

console.log("includes  s character in text variable ? :" + text.includes("s"));

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

console.log("index of :" + text.indexOf("shivam"));

console.log(
  "index of (not available will show) :" + text.indexOf("shrivastav")
);

// lastIndexOf() method ==> returns the last occurrence of a value in string
console.log("lastIndex :" + text.lastIndexOf("shivam"));

// length returns the length of the string

console.log("length of string :" + text.length);

// localeCompare()	Compares two strings in the current locale

// -1 if sorted before
// 1 if sorted after
// 0 if equal

let a = "ab";
let b = "cd";
console.log("local Compare", a.localeCompare(b));
console.log("local Compare", b.localeCompare(a));
console.log("local Compare", a.localeCompare(a));
