// CLASSES & ACCESS MODIFIERS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ABSTRACT CLASS
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
// QUIZ CLASS
var Quiz = /** @class */ (function (_super) {
    __extends(Quiz, _super);
    function Quiz(title, author) {
        var _this = _super.call(this, title, author) || this;
        _this.questions = [];
        return _this;
    }
    Quiz.prototype.addQuestion = function (question, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.questions.push(question);
        }
        else {
            throw new Error("Not allowed to add questions");
        }
    };
    Quiz.prototype.getQuestions = function () {
        return __spreadArray([], this.questions, true);
    };
    Quiz.prototype.getType = function () {
        return "Quiz";
    };
    return Quiz;
}(Content));
// LESSON CLASS
var Lesson = /** @class */ (function (_super) {
    __extends(Lesson, _super);
    function Lesson(title, author, content) {
        var _this = _super.call(this, title, author) || this;
        _this.content = content;
        return _this;
    }
    Lesson.prototype.editContent = function (newContent, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.content = newContent;
        }
        else {
            throw new Error("Cannot edit after publish");
        }
    };
    Lesson.prototype.getContent = function () {
        return this.content;
    };
    Lesson.prototype.getType = function () {
        return "Lesson";
    };
    return Lesson;
}(Content));
// ASSIGNMENT CLASS (challenge)
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author, dueDate) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    Assignment.prototype.setDueDate = function (date, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = date;
        }
        else {
            throw new Error("Cannot change due date");
        }
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
// TESTING
var quiz = new Quiz("TS Quiz", "Harsh");
quiz.addQuestion("What is TypeScript?", true);
console.log(quiz.getQuestions());
quiz.publish();
var lesson = new Lesson("OOP Lesson", "Harsh", "Intro content");
console.log(lesson.getContent());
var assignment = new Assignment("HW1", "Harsh", new Date("2026-03-01"));
console.log(assignment.getDueDate());
