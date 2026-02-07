// Variable declarations

// string variable
let city: string = "Ranchi";
console.log("City:", city);

// number variable
let temperature: number = 28;
console.log("Temperature:", temperature);

// type inference
let isRaining = false;
console.log("Is raining:", isRaining);

// variable with only type
let country: string;
country = "India";
console.log("Country:", country);

// any type example
let discount;
discount = 10;
discount = "No discount";
console.log("Discount:", discount);


// Function using variables
function weatherReport(
  city: string,
  temperature: number,
  isRaining: boolean
): void {
  console.log(
    `In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`
  );
}

weatherReport('pune', 20, true);

// Scope example

let globalVar = "I am global";

class Store {
  storeName = "Main Store";

  show(): void {
    let localVar = "I am local";
    console.log(localVar);
  }
}

let s = new Store();
s.show();
console.log(globalVar);
