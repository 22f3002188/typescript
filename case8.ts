
// NULL vs UNDEFINED in TypeScript
let age: number | null = null;
console.log("Age:", age);

age = 25;
console.log("Updated age:", age);

// undefined example
let data: undefined = undefined;
console.log("Data:", data);

// variable that may be undefined
let score: number | undefined;
console.log("Score:", score);


// User type example

type User = {
  name: string;
  age: number | null;
  email?: string;
};

let user1: User = {
  name: "John",
  age: null,
  email: "john@example.com",
};

let user2: User = {
  name: "Jane",
  age: 28,
};

// function
function printUser(user: User): void {
  let ageInfo =
    user.age === null ? "Age not provided" : `Age: ${user.age}`;

  let emailInfo = user.email
    ? `Email: ${user.email}`
    : "Email not set";

  console.log(`${user.name} - ${ageInfo}, ${emailInfo}`);
}

printUser(user1);
printUser(user2);


// Profile example
type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

let profile1: Profile = {
  username: "harsh",
  bio: null,
};

let profile2: Profile = {
  username: "rahul",
  bio: "Developer",
  avatarUrl: "avatar.png",
};

function showProfile(p: Profile): void {
  let bioText =
    p.bio === null ? "No bio available" : p.bio;

  let avatar =
    p.avatarUrl ?? "default-avatar.png";

  console.log(`User: ${p.username}`);
  console.log(`Bio: ${bioText}`);
  console.log(`Avatar: ${avatar}`);
  console.log("-------------------");
}

showProfile(profile1);
showProfile(profile2);
