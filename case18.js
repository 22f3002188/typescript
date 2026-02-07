// DEPENDENCY INJECTION IN TYPESCRIPT
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// REAL GATEWAYS
var StripeGateway = /** @class */ (function () {
    function StripeGateway() {
    }
    StripeGateway.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Stripe processing \u20B9".concat(amount));
                return [2 /*return*/, true];
            });
        });
    };
    return StripeGateway;
}());
var PaypalGateway = /** @class */ (function () {
    function PaypalGateway() {
    }
    PaypalGateway.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("PayPal processing \u20B9".concat(amount));
                return [2 /*return*/, true];
            });
        });
    };
    return PaypalGateway;
}());
var BankTransferGateway = /** @class */ (function () {
    function BankTransferGateway() {
    }
    BankTransferGateway.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Bank transfer processing \u20B9".concat(amount));
                return [2 /*return*/, true];
            });
        });
    };
    return BankTransferGateway;
}());
// MOCK GATEWAYS (for testing)
var MockSuccessGateway = /** @class */ (function () {
    function MockSuccessGateway() {
    }
    MockSuccessGateway.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Mock success payment \u20B9".concat(amount));
                return [2 /*return*/, true];
            });
        });
    };
    return MockSuccessGateway;
}());
var MockFailGateway = /** @class */ (function () {
    function MockFailGateway() {
    }
    MockFailGateway.prototype.processPayment = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("Mock FAILED payment \u20B9".concat(amount));
                return [2 /*return*/, false];
            });
        });
    };
    return MockFailGateway;
}());
// PAYMENT PROCESSOR
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(gateway) {
        this.gateway = gateway;
    }
    PaymentProcessor.prototype.pay = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gateway.processPayment(amount)];
                    case 1:
                        success = _a.sent();
                        if (success)
                            console.log("Payment success");
                        else
                            console.log("Payment failed");
                        return [2 /*return*/];
                }
            });
        });
    };
    return PaymentProcessor;
}());
// USAGE
var stripe = new PaymentProcessor(new StripeGateway());
stripe.pay(100);
var paypal = new PaymentProcessor(new PaypalGateway());
paypal.pay(200);
var bank = new PaymentProcessor(new BankTransferGateway());
bank.pay(300);
// testing
var testSuccess = new PaymentProcessor(new MockSuccessGateway());
testSuccess.pay(50);
var testFail = new PaymentProcessor(new MockFailGateway());
testFail.pay(75);
