// MASTERING FUNCTIONS IN TYPESCRIPT


// 1️Simple function with optional parameter
function displayMember(id: number, name: string, email?: string): void {
  console.log(`ID: ${id}, Name: ${name}`);
  if (email) console.log(`Email: ${email}`);
}

// call
displayMember(1, "Alice", "alice@mail.com");
displayMember(2, "Bob");


// 2️Rest parameters
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) total += fine;
  return total;
}

console.log("Total fines:", calculateFines(5, 10, 2.5));

// 3️ Default parameter
function membershipFee(price: number, discountRate: number = 0.1): number {
  return price - price * discountRate;
}

console.log("Fee default:", membershipFee(100));
console.log("Fee 20%:", membershipFee(100, 0.2));


// 4️ Callback function
function greetVisitor(
  visitor: string,
  formatter: (name: string) => void
): void {
  formatter(visitor);
}

const vipGreet = (name: string) =>
  console.log(`Welcome VIP ${name}!`);

type VisitorFormatter = (name: string) => void;

let consoleGreet: VisitorFormatter = (n) =>
  console.log(`Hello, ${n}!`);

greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

// 5️ Recursion
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial 5:", factorial(5));

// 6️ Function overloading
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map((item) => JSON.stringify(item)).join("\n");
}

const books = [{ title: "1984" }, { title: "Hobbit" }];

console.log("Text report:\n", generateReport(books));
console.log("JSON report:\n", generateReport(books, "json"));
