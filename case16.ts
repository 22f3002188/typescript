
// DESIGN PATTERNS IN TYPESCRIPT


console.log("=== Singleton Pattern ===");


// 1️ Singleton

class CafeManager {
  private static instance: CafeManager;

  private constructor() {}

  static getInstance(): CafeManager {
    if (!CafeManager.instance) {
      CafeManager.instance = new CafeManager();
    }
    return CafeManager.instance;
  }

  showMessage() {
    console.log("Manager is running the cafe.");
  }
}

const m1 = CafeManager.getInstance();
const m2 = CafeManager.getInstance();

console.log("Same manager?", m1 === m2);
m1.showMessage();


// 2️ Factory Pattern

console.log("\n=== Factory Pattern ===");

interface Drink {
  serve(): void;
}

class Latte implements Drink {
  serve() {
    console.log("Serving Latte");
  }
}

class Espresso implements Drink {
  serve() {
    console.log("Serving Espresso");
  }
}

class DrinkFactory {
  static createDrink(type: string): Drink {
    if (type === "latte") return new Latte();
    if (type === "espresso") return new Espresso();
    throw new Error("Unknown drink");
  }
}

const d1 = DrinkFactory.createDrink("latte");
d1.serve();



// 3️ Observer Pattern

console.log("\n=== Observer Pattern ===");

interface Observer {
  update(msg: string): void;
}

class Customer implements Observer {
  update(msg: string) {
    console.log("Customer notified:", msg);
  }
}

class Inventory implements Observer {
  update(msg: string) {
    console.log("Inventory updated:", msg);
  }
}

class PromotionSystem implements Observer {
  update(msg: string) {
    console.log("Promotion system:", msg);
  }
}

class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(obs: Observer) {
    this.observers.push(obs);
  }

  notifyAll(msg: string) {
    this.observers.forEach(o => o.update(msg));
  }

  completeOrder() {
    this.notifyAll("Drink is ready!");
  }
}

const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());

order.completeOrder();



// 4️ Strategy Pattern

console.log("\n=== Strategy Pattern ===");

interface PrepStrategy {
  prepare(): void;
}

class FastPrep implements PrepStrategy {
  prepare() {
    console.log("Preparing quickly");
  }
}

class EcoPrep implements PrepStrategy {
  prepare() {
    console.log("Preparing eco-friendly");
  }
}

class Barista {
  constructor(private strategy: PrepStrategy) {}

  setStrategy(strategy: PrepStrategy) {
    this.strategy = strategy;
  }

  makeDrink() {
    this.strategy.prepare();
  }
}

const barista = new Barista(new FastPrep());
barista.makeDrink();

barista.setStrategy(new EcoPrep());
barista.makeDrink();
