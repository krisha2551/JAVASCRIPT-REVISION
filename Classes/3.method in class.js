// we can use methods in class objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  job() {
    let job = "software engineers";

    return job;
  }
}

const person1 = new Person("john", 30);

// person details

console.log(
  "person details :",
  "my name is ",
  person1.name +
    " " +
    "my age is " +
    person1.age +
    " " +
    "i am working as a " +
    person1.job()
);

// here job is  method in our Person class object
