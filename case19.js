// IoC CONTAINER (SIMPLIFIED VERSION)
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
// IMPLEMENTATIONS
var RSSFeedSource = /** @class */ (function () {
    function RSSFeedSource() {
    }
    RSSFeedSource.prototype.fetchArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ["RSS: Article 1", "RSS: Article 2"]];
            });
        });
    };
    return RSSFeedSource;
}());
var APISource = /** @class */ (function () {
    function APISource() {
    }
    APISource.prototype.fetchArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ["API: Article A", "API: Article B"]];
            });
        });
    };
    return APISource;
}());
var MockSource = /** @class */ (function () {
    function MockSource() {
    }
    MockSource.prototype.fetchArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ["Mock article"]];
            });
        });
    };
    return MockSource;
}());
// SIMPLE IoC CONTAINER
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.register = function (name, instance) {
        this.services.set(name, instance);
    };
    Container.resolve = function (name) {
        return this.services.get(name);
    };
    Container.services = new Map();
    return Container;
}());
// SERVICE USING DI
var NewsAggregator = /** @class */ (function () {
    function NewsAggregator(source) {
        this.source = source;
    }
    NewsAggregator.prototype.showNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var articles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.source.fetchArticles()];
                    case 1:
                        articles = _a.sent();
                        articles.forEach(function (a) { return console.log(a); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewsAggregator;
}());
// REGISTER SERVICES
Container.register("newsSource", new RSSFeedSource());
// resolve
var source = Container.resolve("newsSource");
var app = new NewsAggregator(source);
app.showNews();
// SWAP IMPLEMENTATION
console.log("\nSwitching to API source\n");
Container.register("newsSource", new APISource());
var source2 = Container.resolve("newsSource");
var app2 = new NewsAggregator(source2);
// TEST WITH MOCK
console.log("\nTesting with mock\n");
Container.register("newsSource", new MockSource());
var testSource = Container.resolve("newsSource");
var testApp = new NewsAggregator(testSource);
testApp.showNews();
