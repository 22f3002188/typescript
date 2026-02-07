// TYPE ALIASES IN TYPESCRIPT
var widgetId = 42;
console.log("Product ID:", widgetId);
var status = "shipped";
console.log("Order status:", status);
var loc = [3, 14];
console.log("Location:", loc);
var product = {
    id: widgetId,
    name: "Widget",
    location: loc,
    price: 19.99,
};
console.log(product);
var consoleLogger = function (msg) {
    console.log("[LOG]", msg);
};
consoleLogger("Product created");
var productContainer = {
    value: product,
    timestamp: new Date(),
};
console.log(productContainer);
var customer = {
    id: "C123",
    name: "Alice",
};
var processOrder = function (status) {
    consoleLogger("Order is now ".concat(status));
};
processOrder("pending");
// wrap customer in generic container
var customerContainer = {
    value: customer,
    timestamp: new Date(),
};
console.log(customerContainer);
