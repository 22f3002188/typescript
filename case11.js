// LOOPS IN TYPESCRIPT (FIXED VERSION)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" },
];
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2,
};
var visitors = ["Alice", "Bob", "Carol"];
// FOR LOOP
var totalProcessed = 0;
for (var i_1 = 0; i_1 < transactions.length; i_1++) {
    var tx = transactions[i_1]; // FIX here
    if (tx.type === "cancelled")
        continue;
    if (tx.type === "priority") {
        console.log("Priority found → stop loop");
        break;
    }
    console.log("Processing ".concat(tx.id, ": ").concat(tx.type));
    totalProcessed++;
}
console.log("Total processed:", totalProcessed);
// WHILE LOOP
var queue = __spreadArray([], transactions, true);
var processedWhile = 0;
while (queue.length > 0) {
    var tx = queue.shift();
    if (tx.type === "cancelled")
        continue;
    console.log("While processed:", tx.id);
    processedWhile++;
}
// DO WHILE LOOP
var idx = 0;
var returnCount = 0;
do {
    var tx = transactions[idx];
    if (tx && tx.type === "return") {
        console.log("Handling return:", tx.id);
        returnCount++;
    }
    idx++;
} while (idx < transactions.length);
console.log("Returns:", returnCount);
// COUNTERS
var counters = {
    checkout: 0,
    return: 0,
    cancelled: 0,
    priority: 0,
};
for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
    var tx = transactions_1[_i];
    counters[tx.type]++;
}
console.log("Counters:", counters);
// INFINITE LOOP + BREAK
var i = 0;
while (true) {
    if (((_a = transactions[i]) === null || _a === void 0 ? void 0 : _a.type) === "priority") {
        console.log("Priority detected → break");
        break;
    }
    i++;
}
// for...in (object)
for (var book in inventory) {
    inventory[book] = 0;
}
console.log("Inventory reset:", inventory);
// for...of (array)
for (var _b = 0, visitors_1 = visitors; _b < visitors_1.length; _b++) {
    var name_1 = visitors_1[_b];
    console.log("Visitor:", name_1);
}
// reverse
for (var i_2 = visitors.length - 1; i_2 >= 0; i_2--) {
    console.log("Reverse visitor:", visitors[i_2]);
}
