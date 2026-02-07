// GENERICS IN TYPESCRIPT


// 1️ Generic class
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

// using with string
const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");

console.log("Quiz feedback:", quizFeedback.getAllFeedback());

// using with object
type LessonFeedback = {
  rating: number;
  comment: string;
};

const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({ rating: 5, comment: "Excellent!" });
lessonFeedback.addFeedback({ rating: 4, comment: "Good lesson" });

console.log("Lesson feedback:", lessonFeedback.getAllFeedback());


// 2️ Generic function
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstQuiz = getFirstItem(quizFeedback.getAllFeedback());
console.log("First quiz feedback:", firstQuiz);

const firstLesson = getFirstItem(lessonFeedback.getAllFeedback());
console.log("First lesson feedback:", firstLesson);


// 3️ Another generic function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));
console.log(identity<string>("Hello"));
console.log(identity(true));


// 4️ Generic with constraint
interface HasId {
  id: string;
}

function printId<T extends HasId>(item: T): void {
  console.log("ID:", item.id);
}

printId({ id: "A1", name: "Alice" });
