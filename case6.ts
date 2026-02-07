
// number

let balance: number = 1000.5;
console.log("Balance:", balance);


// string

let accountName: string = "Savings";
console.log("Account:", accountName);


// boolean

let isActive: boolean = true;
console.log("Active:", isActive);


// null & undefined

let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log("Null value:", emptyValue);
console.log("Undefined value:", notAssigned);


// object

let account: object = {
  id: 1,
  name: "Main Account",
};
console.log(account);


// symbol

const UNIQUE_ID = Symbol("id");
let user = {
  [UNIQUE_ID]: 123,
};
console.log("Symbol value:", user[UNIQUE_ID]);


// void function

function printMessage(): void {
  console.log("Transaction complete");
}
printMessage();

// never function

function throwError(): never {
  throw new Error("Something went wrong");
}

// throwError(); 

// transaction function

function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {
  if (amount < 0) {
    throw new Error("Negative amount not allowed");
  }

  console.log(
    `Transaction: ${amount}, Desc: ${description}, Credit: ${isCredit}`
  );
}

processTransaction(500, "Deposit", true);
