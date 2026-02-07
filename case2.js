var favoriteFruit = "Mango";
console.log("My favorite fruit is:", favoriteFruit);
function doubleNumber(num) {
    console.log("Double value is:", num * 2);
}
doubleNumber(5);
// Single-line comment
/*
Multi-line comment
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
    };
    return Person;
}());
var p1 = new Person("Harsh");
p1.sayHello();
