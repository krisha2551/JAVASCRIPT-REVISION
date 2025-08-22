//  to create class inheritance use the extends keyword

// A class created with a class inheritance inherits all the methods from another class:

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// example

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("john", 30);

// now  i want to access the properties of Person class object in different class object

class PersonDetails extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const person2 = new PersonDetails(
  person1.name,
  person1.age,
  "software Engineer"
);

console.log(
  "person details :",
  " my name is " +
    " " +
    person2.name +
    " " +
    "and my age is " +
    " " +
    person2.age +
    " " +
    "and i am working as a" +
    person2.job
);
