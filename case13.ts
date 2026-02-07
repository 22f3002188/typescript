// OPTIONAL & DEFAULT PARAMETERS


// 1️ Optional parameter example
function describePerson(name: string, age?: number): void {
  if (typeof age === "number") {
    console.log(`Name: ${name}, Age: ${age}`);
  } else {
    console.log(`Name: ${name}, Age: Unknown`);
  }
}

describePerson("Eve");
describePerson("Frank", 28);


// 2️ Default parameter example
function calculatePrice(
  basePrice: number,
  discount: number = 0.1
): number {
  return basePrice - basePrice * discount;
}

console.log("Price default:", calculatePrice(100));
console.log("Price 20%:", calculatePrice(100, 0.2));


// Greeting example
function greet(name: string, age: number = 25): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("Alice");
greet("Bob", 30);
