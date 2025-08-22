// normal object example

const person = {
  name: "John",
  surname: "doe",
};

console.log("person details before: ", person);

// adding new age properties to the person object

person.age = 30;

console.log("person details after: ", person);

// now with class example

class Car {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
  }
}

const carOne = new Car("BMW", "M5");

console.log("car details before: ", carOne);

// now i want to add properties in carOne object

carOne.color = "green";

console.log("car details after: ", carOne);
