// more strings methods

let text = "hello krisha";

// match() method ==> searches a string for a value, or a regular expression, and returns the matches

console.log("finding match in string : ", text.match("sh"));

// if not finding  matching string it will return null

console.log("not finding match in string : ", text.match("ab"));

// repeat() method ==> returns new string with a number of copies of strings

console.log("repeating the string :", text.repeat(2));

// replace()  method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("replacing hello to hi :", text.replace("hello", "hii"));

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("replacing l to L in all syntax :", text.replaceAll("l", "L"));

// search() method ==> searches a string for a value, or regular expression, and returns  the index(position) of the match

console.log("searching l in text :", text.search("l"));

//here we cant put starting index we can do that indexOf method

console.log("indexOf op with starting index =>", text.indexOf("h", 6));

// slice() method ==> extracts a part of a string and returns a new string

// here first is staring index and after that end index is start counting from 0

console.log("text example", text); // hello shivam

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 5));

console.log("slice OP", text.slice(3, 8));

console.log("slice OP :", text.slice(-1)); // it will start from last
