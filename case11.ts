
// LOOPS IN TYPESCRIPT (FIXED VERSION)


type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" },
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2,
};

const visitors: string[] = ["Alice", "Bob", "Carol"];


// FOR LOOP

let totalProcessed = 0;

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i]!;   

  if (tx.type === "cancelled") continue;

  if (tx.type === "priority") {
    console.log("Priority found → stop loop");
    break;
  }

  console.log(`Processing ${tx.id}: ${tx.type}`);
  totalProcessed++;
}

console.log("Total processed:", totalProcessed);


// WHILE LOOP

let queue = [...transactions];
let processedWhile = 0;

while (queue.length > 0) {
  const tx = queue.shift()!;

  if (tx.type === "cancelled") continue;

  console.log("While processed:", tx.id);
  processedWhile++;
}


// DO WHILE LOOP

let idx = 0;
let returnCount = 0;

do {
  const tx = transactions[idx];

  if (tx && tx.type === "return") {
    console.log("Handling return:", tx.id);
    returnCount++;
  }

  idx++;
} while (idx < transactions.length);

console.log("Returns:", returnCount);

// COUNTERS

let counters = {
  checkout: 0,
  return: 0,
  cancelled: 0,
  priority: 0,
};

for (let tx of transactions) {
  counters[tx.type]++;
}

console.log("Counters:", counters);


// INFINITE LOOP + BREAK

let i = 0;
while (true) {
  if (transactions[i]?.type === "priority") {
    console.log("Priority detected → break");
    break;
  }
  i++;
}


// for...in (object)

for (let book in inventory) {
  inventory[book] = 0;
}

console.log("Inventory reset:", inventory);


// for...of (array)

for (let name of visitors) {
  console.log("Visitor:", name);
}

// reverse
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log("Reverse visitor:", visitors[i]);
}
