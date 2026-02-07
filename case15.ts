// ADVANCED TYPES IN TYPESCRIPT



// BASIC TYPES

type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// union
type AnyUser = Learner | Instructor | Admin;

// intersection
type MultiRoleUser = Learner & Instructor;


// UNION HANDLING

function printUserInfo(user: AnyUser): void {
  if ("quizzesCompleted" in user) {
    console.log(`Learner: ${user.quizzesCompleted} quizzes`);
  } else if ("coursesTaught" in user) {
    console.log(`Instructor: ${user.coursesTaught} courses`);
  } else {
    console.log(`Admin access: ${user.accessLevel}`);
  }
}

printUserInfo({ id: "L1", quizzesCompleted: 5 });
printUserInfo({ id: "I1", coursesTaught: 3 });
printUserInfo({ id: "A1", accessLevel: "super" });

// INTERSECTION EXAMPLE

const alice: MultiRoleUser = {
  id: "alice123",
  quizzesCompleted: 10,
  coursesTaught: 2,
};

console.log("Multi-role user:", alice);


// MAPPED TYPE

type ModuleStatus = "not-started" | "in-progress" | "completed";

type ProgressMap<Modules extends string> = {
  [K in Modules]: ModuleStatus;
};

type MyModules = "quiz1" | "video2" | "assignment3";
type MyProgress = ProgressMap<MyModules>;

const progress: MyProgress = {
  quiz1: "completed",
  video2: "in-progress",
  assignment3: "not-started",
};

console.log("Progress:", progress);

// CONDITIONAL TYPE

type FeedbackAllowed<T extends ModuleStatus> =
  T extends "completed" ? string : never;

type FeedbackForQuiz = FeedbackAllowed<"completed">;

// UTILITY TYPES

type LearnerReport = {
  name: string;
  score: number;
  feedback: string;
};

type DraftReport = Partial<LearnerReport>;
type ReadonlyReport = Readonly<LearnerReport>;

const draft: DraftReport = { name: "Alice" };
console.log("Draft:", draft);

// CHALLENGE SOLUTIONS


// union type
type InstructorOrAdmin = Instructor | Admin;

// readonly type
type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;

const a1: ReadonlyAssignment = {
  title: "TS Homework",
  dueDate: new Date(),
  points: 100,
};

// mapped type change values
type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};

type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

const stats: StatsAsStrings = {
  quizzes: "10",
  videos: "5",
  assignments: "3",
};

console.log("Stats:", stats);
