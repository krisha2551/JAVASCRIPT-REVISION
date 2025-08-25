// A default export allows you to export a single function, class, or object from a file. Unlike named exports, you can only have one default export per file.

// When importing a default export, you do not need to use curly braces {}. You can also give it any name you want during import.

export default function function3() {
  return "this is function 3";
}

// now if i want to import that default module i can import using

// import function3 from  default export.js  //  here i don't have to use brackets

// i can't export two default module in one file it will generate  error

// export default  function function4(){
//     return  "this is function 4";
// }

// will throw an error , but if comment or removed second  default module will not throw an error
