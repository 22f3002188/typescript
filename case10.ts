
// CONDITIONAL LOGIC IN TYPESCRIPT


// 1️check sign (if)
function checkSign(num: number): void {
  if (num > 0) {
    console.log("Number is positive");
  }
}

checkSign(5);

// 2️even or odd (if-else)
function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}

evenOrOdd(10);
evenOrOdd(7);

// 3️get grade (else-if ladder)
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let grade = getGrade(85);
console.log("Grade:", grade);

// 4️feedback (switch)
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent performance!");
      break;
    case "B":
      console.log("Great job!");
      break;
    case "C":
      console.log("Good effort.");
      break;
    case "D":
      console.log("Needs improvement.");
      break;
    default:
      console.log("Fail. Study harder.");
      break;
  }
}

provideFeedback(grade);

// FULL STUDENT EVALUATOR

function checkEligibility(attendance: number): boolean {
  if (attendance >= 75) {
    console.log("Eligible for exam");
    return true;
  } else {
    console.log("Not eligible for exam");
    return false;
  }
}

function passOrFail(score: number): boolean {
  if (score >= 40) {
    console.log("Pass");
    return true;
  } else {
    console.log("Fail");
    return false;
  }
}

function assignGrade(score: number): string {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function evaluateStudent(attendance: number, score: number): void {
  if (!checkEligibility(attendance)) return;
  if (!passOrFail(score)) return;

  const grade = assignGrade(score);
  console.log("Assigned grade:", grade);
  provideFeedback(grade);
}

evaluateStudent(80, 85);
