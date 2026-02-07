// DESIGN PATTERNS IN TYPESCRIPT
console.log("=== Singleton Pattern ===");
// 1️ Singleton
var CafeManager = /** @class */ (function () {
    function CafeManager() {
    }
    CafeManager.getInstance = function () {
        if (!CafeManager.instance) {
            CafeManager.instance = new CafeManager();
        }
        return CafeManager.instance;
    };
    CafeManager.prototype.showMessage = function () {
        console.log("Manager is running the cafe.");
    };
    return CafeManager;
}());
var m1 = CafeManager.getInstance();
var m2 = CafeManager.getInstance();
console.log("Same manager?", m1 === m2);
m1.showMessage();
// 2️ Factory Pattern
console.log("\n=== Factory Pattern ===");
var Latte = /** @class */ (function () {
    function Latte() {
    }
    Latte.prototype.serve = function () {
        console.log("Serving Latte");
    };
    return Latte;
}());
var Espresso = /** @class */ (function () {
    function Espresso() {
    }
    Espresso.prototype.serve = function () {
        console.log("Serving Espresso");
    };
    return Espresso;
}());
var DrinkFactory = /** @class */ (function () {
    function DrinkFactory() {
    }
    DrinkFactory.createDrink = function (type) {
        if (type === "latte")
            return new Latte();
        if (type === "espresso")
            return new Espresso();
        throw new Error("Unknown drink");
    };
    return DrinkFactory;
}());
var d1 = DrinkFactory.createDrink("latte");
d1.serve();
// 3️ Observer Pattern
console.log("\n=== Observer Pattern ===");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.update = function (msg) {
        console.log("Customer notified:", msg);
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.update = function (msg) {
        console.log("Inventory updated:", msg);
    };
    return Inventory;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.update = function (msg) {
        console.log("Promotion system:", msg);
    };
    return PromotionSystem;
}());
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    };
    DrinkOrder.prototype.notifyAll = function (msg) {
        this.observers.forEach(function (o) { return o.update(msg); });
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Drink is ready!");
    };
    return DrinkOrder;
}());
var order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
// 4️ Strategy Pattern
console.log("\n=== Strategy Pattern ===");
var FastPrep = /** @class */ (function () {
    function FastPrep() {
    }
    FastPrep.prototype.prepare = function () {
        console.log("Preparing quickly");
    };
    return FastPrep;
}());
var EcoPrep = /** @class */ (function () {
    function EcoPrep() {
    }
    EcoPrep.prototype.prepare = function () {
        console.log("Preparing eco-friendly");
    };
    return EcoPrep;
}());
var Barista = /** @class */ (function () {
    function Barista(strategy) {
        this.strategy = strategy;
    }
    Barista.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Barista.prototype.makeDrink = function () {
        this.strategy.prepare();
    };
    return Barista;
}());
var barista = new Barista(new FastPrep());
barista.makeDrink();
barista.setStrategy(new EcoPrep());
barista.makeDrink();
