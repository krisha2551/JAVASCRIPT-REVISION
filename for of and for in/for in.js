// for in used for object [iterable]

let person = {
  name: "xyz",
  age: 2,
  city: "abcd",
};

for (let data in person) {
  console.log(`${data}`, person[data]);
}
