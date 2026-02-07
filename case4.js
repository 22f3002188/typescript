// let example
var score = 50;
console.log("Initial score:", score);
score = 70; // allowed
console.log("Updated score:", score);
// block scope example
if (true) {
    var score_1 = 100;
    console.log("Block score:", score_1);
}
// console.log(score); // outer score still accessible
// const example
var COUNTRY = "India";
console.log("Country:", COUNTRY);
// COUNTRY = "USA"; // error
// const with object
var user = {
    name: "Harsh",
    age: 22,
};
user.age = 23; // allowed (object property change)
console.log(user);
var marks = 80;
console.log("Marks:", marks);
