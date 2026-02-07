
// Using any type


let surveyAnswer: any;

surveyAnswer = "Yes";
console.log("Answer:", surveyAnswer);

surveyAnswer = 5;
console.log("Answer:", surveyAnswer);

surveyAnswer = ["Option A", "Option B"];
console.log("Answer:", surveyAnswer);


// Store multiple answers

let allAnswers: any[] = [];

allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });

for (let ans of allAnswers) {
  console.log("Received answer:", ans);
}


// Function with any type

let surveyStore: { [key: string]: any } = {};

function recordAnswer(questionId: string, answer: any): void {
  surveyStore[questionId] = answer;
}

recordAnswer("q1", "Yes");
recordAnswer("q2", 42);
recordAnswer("q3", ["A", "B"]);

console.log("All recorded answers:");
console.log(surveyStore);
