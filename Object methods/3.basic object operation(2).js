// Creating object using functions constructor

function PersonDetails(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

const person = new PersonDetails("shivam", 22, "software Developer");

console.log("person object created", person);

// adding properties to object

PersonDetails.prototype.email = "email@gmail.com";

console.log("person  object with new email property added", person.email);

// Removing Properties from an Object

delete person.job;

console.log("person object after job has been deleted", person);

// Checking if a Property Exists

console.log("checking if a property exists", person.hasOwnProperty("job")); // because job property we have deleted in above code

console.log("checking if a property exists", person.hasOwnProperty("name")); // op will return true

// Iterating Through Object Properties

for (let key in person) {
  console.log("person details", key + ":" + person[key]);
}
