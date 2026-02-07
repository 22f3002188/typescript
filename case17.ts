
// CLASSES & ACCESS MODIFIERS


// ABSTRACT CLASS

abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish() {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  abstract getType(): string;
}


// QUIZ CLASS

class Quiz extends Content {
  private questions: string[] = [];

  constructor(title: string, author: string) {
    super(title, author);
  }

  addQuestion(question: string, isInstructor: boolean) {
    if (!this.isPublished() && isInstructor) {
      this.questions.push(question);
    } else {
      throw new Error("Not allowed to add questions");
    }
  }

  getQuestions(): string[] {
    return [...this.questions];
  }

  getType(): string {
    return "Quiz";
  }
}


// LESSON CLASS

class Lesson extends Content {
  private content: string;

  constructor(title: string, author: string, content: string) {
    super(title, author);
    this.content = content;
  }

  editContent(newContent: string, isInstructor: boolean) {
    if (!this.isPublished() && isInstructor) {
      this.content = newContent;
    } else {
      throw new Error("Cannot edit after publish");
    }
  }

  getContent(): string {
    return this.content;
  }

  getType(): string {
    return "Lesson";
  }
}

// ASSIGNMENT CLASS (challenge)

class Assignment extends Content {
  private dueDate: Date;

  constructor(title: string, author: string, dueDate: Date) {
    super(title, author);
    this.dueDate = dueDate;
  }

  setDueDate(date: Date, isInstructor: boolean) {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = date;
    } else {
      throw new Error("Cannot change due date");
    }
  }

  getDueDate(): Date {
    return this.dueDate;
  }

  getType(): string {
    return "Assignment";
  }
}


// TESTING


const quiz = new Quiz("TS Quiz", "Harsh");
quiz.addQuestion("What is TypeScript?", true);
console.log(quiz.getQuestions());

quiz.publish();

const lesson = new Lesson("OOP Lesson", "Harsh", "Intro content");
console.log(lesson.getContent());

const assignment = new Assignment(
  "HW1",
  "Harsh",
  new Date("2026-03-01")
);

console.log(assignment.getDueDate());
