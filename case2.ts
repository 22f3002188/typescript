let favoriteFruit: string = "Mango";
console.log("My favorite fruit is:", favoriteFruit);

function doubleNumber(num: number): void {
  console.log("Double value is:", num * 2);
}

doubleNumber(5);



// Single-line comment

/*
Multi-line comment
*/


class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): void {
    console.log("Hello, my name is " + this.name);
  }
}

let p1 = new Person("Harsh");
p1.sayHello();


