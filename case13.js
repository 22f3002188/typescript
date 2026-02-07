// OPTIONAL & DEFAULT PARAMETERS
// 1️ Optional parameter example
function describePerson(name, age) {
    if (typeof age === "number") {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    }
    else {
        console.log("Name: ".concat(name, ", Age: Unknown"));
    }
}
describePerson("Eve");
describePerson("Frank", 28);
// 2️ Default parameter example
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - basePrice * discount;
}
console.log("Price default:", calculatePrice(100));
console.log("Price 20%:", calculatePrice(100, 0.2));
// Greeting example
function greet(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old."));
}
greet("Alice");
greet("Bob", 30);
