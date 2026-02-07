// ADVANCED TYPES IN TYPESCRIPT
// UNION HANDLING
function printUserInfo(user) {
    if ("quizzesCompleted" in user) {
        console.log("Learner: ".concat(user.quizzesCompleted, " quizzes"));
    }
    else if ("coursesTaught" in user) {
        console.log("Instructor: ".concat(user.coursesTaught, " courses"));
    }
    else {
        console.log("Admin access: ".concat(user.accessLevel));
    }
}
printUserInfo({ id: "L1", quizzesCompleted: 5 });
printUserInfo({ id: "I1", coursesTaught: 3 });
printUserInfo({ id: "A1", accessLevel: "super" });
// INTERSECTION EXAMPLE
var alice = {
    id: "alice123",
    quizzesCompleted: 10,
    coursesTaught: 2,
};
console.log("Multi-role user:", alice);
var progress = {
    quiz1: "completed",
    video2: "in-progress",
    assignment3: "not-started",
};
console.log("Progress:", progress);
var draft = { name: "Alice" };
console.log("Draft:", draft);
var a1 = {
    title: "TS Homework",
    dueDate: new Date(),
    points: 100,
};
var stats = {
    quizzes: "10",
    videos: "5",
    assignments: "3",
};
console.log("Stats:", stats);
