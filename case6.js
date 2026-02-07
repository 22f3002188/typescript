// number
var _a;
var balance = 1000.5;
console.log("Balance:", balance);
// string
var accountName = "Savings";
console.log("Account:", accountName);
// boolean
var isActive = true;
console.log("Active:", isActive);
// null & undefined
var emptyValue = null;
var notAssigned = undefined;
console.log("Null value:", emptyValue);
console.log("Undefined value:", notAssigned);
// object
var account = {
    id: 1,
    name: "Main Account",
};
console.log(account);
// symbol
var UNIQUE_ID = Symbol("id");
var user = (_a = {},
    _a[UNIQUE_ID] = 123,
    _a);
console.log("Symbol value:", user[UNIQUE_ID]);
// void function
function printMessage() {
    console.log("Transaction complete");
}
printMessage();
// never function
function throwError() {
    throw new Error("Something went wrong");
}
// transaction function
function processTransaction(amount, description, isCredit) {
    if (amount < 0) {
        throw new Error("Negative amount not allowed");
    }
    console.log("Transaction: ".concat(amount, ", Desc: ").concat(description, ", Credit: ").concat(isCredit));
}
processTransaction(500, "Deposit", true);
