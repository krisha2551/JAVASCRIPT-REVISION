// accessing object properties

let personDetails = {
  name: "shivam",
  age: "22",
  job: "software Developer",
};

console.log("personDetails: ", personDetails);

// now accessing the values of personDetails object using . notation

console.log("person Name :", personDetails.name);

// now accessing the values of personDetails object using []

console.log("person job :", personDetails["job"]);

//  Modifying Object Properties using . notation we can modify using brackets too,

personDetails.name = "john doe";

// using brackets notation

personDetails["name"] = "john doe";

console.log("person Name :", personDetails.name);

//  Adding Properties to an Object using brackets notation too.

personDetails.email = "email@example.com";

console.log("person details object  with all changes:", personDetails);

// adding properties to an Object using brackets notation

personDetails["software"] = "Developing";

console.log("person details object with all changes:", personDetails);
