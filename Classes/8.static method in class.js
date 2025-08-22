// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

// example

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  static carColor() {
    return "car color is blue";
  }
}

const carDetail = new Car("BMW");

// here i m invoke my static method on Car Class Object
console.log("car Color :", Car.carColor());

// if i try to invoke my static method on instance of carDetail object will throw an error

console.log("my car color is (err) :", carDetail.carColor());

//  another example

// if you want to use the  object inside the static method, you can send it as a parameter:

class Person {
  constructor(name) {
    this.name = name;
  }

  static greeting(name) {
    return "Hello, " + name;
  }
}

const person1 = new Person("shivam");

// console.log("output :", Person.greeting(person1.name)); // will throw an error if you uncomment this line
