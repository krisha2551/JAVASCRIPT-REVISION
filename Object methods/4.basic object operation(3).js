//  creating objects using class constructor

class personDetails {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new personDetails("shivam", 22, "software developer");

console.log("person details: ", person);

// creating one more  object with different values using object literals

const studentsDetails = {
  totalStudents: 500,
  exam: "common entrance test",
  block: "a-f",
};

// now merging two objects into one object

const allDetails = { ...person, ...studentsDetails };

console.log("allDetails: ", allDetails);

// object length

console.log("allDetails length: ", Object.keys(allDetails).length);
