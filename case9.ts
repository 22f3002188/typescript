
// TYPE ALIASES IN TYPESCRIPT


// 1️Primitive alias
type ProductID = number;
let widgetId: ProductID = 42;
console.log("Product ID:", widgetId);

// 2️Union alias
type OrderStatus = "pending" | "shipped" | "returned";
let status: OrderStatus = "shipped";
console.log("Order status:", status);

// 3️Tuple alias
type Coordinate = [number, number];
let loc: Coordinate = [3, 14];
console.log("Location:", loc);

// 4️Object alias
type Product = {
  id: ProductID;
  name: string;
  location: Coordinate;
  price: number;
};

let product: Product = {
  id: widgetId,
  name: "Widget",
  location: loc,
  price: 19.99,
};

console.log(product);

// 5️Function type alias
type Logger = (message: string) => void;

const consoleLogger: Logger = (msg) => {
  console.log("[LOG]", msg);
};

consoleLogger("Product created");

// 6️Generic alias
type Container<T> = {
  value: T;
  timestamp: Date;
};

let productContainer: Container<Product> = {
  value: product,
  timestamp: new Date(),
};

console.log(productContainer);


// CHALLENGE PART


// CustomerID alias
type CustomerID = string;

// Customer object alias
type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

let customer: Customer = {
  id: "C123",
  name: "Alice",
};

// callback alias
type OrderCallback = (status: OrderStatus) => void;

const processOrder: OrderCallback = (status) => {
  consoleLogger(`Order is now ${status}`);
};

processOrder("pending");

// wrap customer in generic container
let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date(),
};

console.log(customerContainer);
