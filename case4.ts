// let example
let score: number = 50;
console.log("Initial score:", score);

score = 70; // allowed
console.log("Updated score:", score);


// block scope example

if (true) {
  let score: number = 100;
  console.log("Block score:", score);
}

// console.log(score); // outer score still accessible

// const example

const COUNTRY: string = "India";
console.log("Country:", COUNTRY);

// COUNTRY = "USA"; // error


// const with object
const user = {
  name: "Harsh",
  age: 22,
};

user.age = 23; // allowed (object property change)
console.log(user);


let marks: number = 80;
console.log("Marks:", marks);
