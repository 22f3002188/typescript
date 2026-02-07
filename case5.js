// Using any type
var surveyAnswer;
surveyAnswer = "Yes";
console.log("Answer:", surveyAnswer);
surveyAnswer = 5;
console.log("Answer:", surveyAnswer);
surveyAnswer = ["Option A", "Option B"];
console.log("Answer:", surveyAnswer);
// Store multiple answers
var allAnswers = [];
allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });
for (var _i = 0, allAnswers_1 = allAnswers; _i < allAnswers_1.length; _i++) {
    var ans = allAnswers_1[_i];
    console.log("Received answer:", ans);
}
// Function with any type
var surveyStore = {};
function recordAnswer(questionId, answer) {
    surveyStore[questionId] = answer;
}
recordAnswer("q1", "Yes");
recordAnswer("q2", 42);
recordAnswer("q3", ["A", "B"]);
console.log("All recorded answers:");
console.log(surveyStore);
