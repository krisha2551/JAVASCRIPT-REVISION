// using setter we can set the properties of class object

// example

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set personJob(jobName) {
    return (this.job = jobName);
  }
}

const personDetails = new Person("john", 22);

personDetails.personJob = "software engineer";

console.log(
  "personDetails :",
  "my name is ",
  personDetails.name + " " + "my age is",
  personDetails.age + " " + "and i am working as " + personDetails.job
);
