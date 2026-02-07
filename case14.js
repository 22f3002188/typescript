// GENERICS IN TYPESCRIPT
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1️ Generic class
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };
    FeedbackBox.prototype.getAllFeedback = function () {
        return __spreadArray([], this.feedbacks, true);
    };
    return FeedbackBox;
}());
// using with string
var quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
console.log("Quiz feedback:", quizFeedback.getAllFeedback());
var lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({ rating: 5, comment: "Excellent!" });
lessonFeedback.addFeedback({ rating: 4, comment: "Good lesson" });
console.log("Lesson feedback:", lessonFeedback.getAllFeedback());
// 2️ Generic function
function getFirstItem(items) {
    return items[0];
}
var firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
console.log("First quiz feedback:", firstQuiz);
var firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
console.log("First lesson feedback:", firstLesson);
// 3️ Another generic function
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity("Hello"));
console.log(identity(true));
function printId(item) {
    console.log("ID:", item.id);
}
printId({ id: "A1", name: "Alice" });
