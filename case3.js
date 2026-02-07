// Variable declarations
// string variable
var city = "Ranchi";
console.log("City:", city);
// number variable
var temperature = 28;
console.log("Temperature:", temperature);
// type inference
var isRaining = false;
console.log("Is raining:", isRaining);
// variable with only type
var country;
country = "India";
console.log("Country:", country);
// any type example
var discount;
discount = 10;
discount = "No discount";
console.log("Discount:", discount);
// Function using variables
function weatherReport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", it is ").concat(temperature, "\u00B0C. Is it raining? ").concat(isRaining));
}
weatherReport('pune', 20, true);
// Scope example
var globalVar = "I am global";
var Store = /** @class */ (function () {
    function Store() {
        this.storeName = "Main Store";
    }
    Store.prototype.show = function () {
        var localVar = "I am local";
        console.log(localVar);
    };
    return Store;
}());
var s = new Store();
s.show();
console.log(globalVar);
