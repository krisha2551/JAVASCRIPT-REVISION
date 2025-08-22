// Classes also allows you to use getters and setters.

// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

// To add getters and setters in the class, use the get and set keywords.

class Car {
  constructor(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }

  get carManufacturedYear() {
    return this.year;
  }
}

const car = new Car("BMW", "M5", 2023);

console.log(
  "car Details: " +
    "i have " +
    car.brand +
    " " +
    "and model is  " +
    car.name +
    " " +
    "which is manufactured  in " +
    car.carManufacturedYear
);

// here carManufacturedYear  is get method we are getting year in  Car class object

// when we use method we don't invoke
