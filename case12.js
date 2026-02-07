// MASTERING FUNCTIONS IN TYPESCRIPT
// 1️Simple function with optional parameter
function displayMember(id, name, email) {
    console.log("ID: ".concat(id, ", Name: ").concat(name));
    if (email)
        console.log("Email: ".concat(email));
}
// call
displayMember(1, "Alice", "alice@mail.com");
displayMember(2, "Bob");
// 2️Rest parameters
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var fine = fines_1[_a];
        total += fine;
    }
    return total;
}
console.log("Total fines:", calculateFines(5, 10, 2.5));
// 3️ Default parameter
function membershipFee(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    return price - price * discountRate;
}
console.log("Fee default:", membershipFee(100));
console.log("Fee 20%:", membershipFee(100, 0.2));
// 4️ Callback function
function greetVisitor(visitor, formatter) {
    formatter(visitor);
}
var vipGreet = function (name) {
    return console.log("Welcome VIP ".concat(name, "!"));
};
var consoleGreet = function (n) {
    return console.log("Hello, ".concat(n, "!"));
};
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);
// 5️ Recursion
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
console.log("Factorial 5:", factorial(5));
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(function (item) { return JSON.stringify(item); }).join("\n");
}
var books = [{ title: "1984" }, { title: "Hobbit" }];
console.log("Text report:\n", generateReport(books));
console.log("JSON report:\n", generateReport(books, "json"));
