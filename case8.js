// NULL vs UNDEFINED in TypeScript
var age = null;
console.log("Age:", age);
age = 25;
console.log("Updated age:", age);
// undefined example
var data = undefined;
console.log("Data:", data);
// variable that may be undefined
var score;
console.log("Score:", score);
var user1 = {
    name: "John",
    age: null,
    email: "john@example.com",
};
var user2 = {
    name: "Jane",
    age: 28,
};
// function
function printUser(user) {
    var ageInfo = user.age === null ? "Age not provided" : "Age: ".concat(user.age);
    var emailInfo = user.email
        ? "Email: ".concat(user.email)
        : "Email not set";
    console.log("".concat(user.name, " - ").concat(ageInfo, ", ").concat(emailInfo));
}
printUser(user1);
printUser(user2);
var profile1 = {
    username: "harsh",
    bio: null,
};
var profile2 = {
    username: "rahul",
    bio: "Developer",
    avatarUrl: "avatar.png",
};
function showProfile(p) {
    var _a;
    var bioText = p.bio === null ? "No bio available" : p.bio;
    var avatar = (_a = p.avatarUrl) !== null && _a !== void 0 ? _a : "default-avatar.png";
    console.log("User: ".concat(p.username));
    console.log("Bio: ".concat(bioText));
    console.log("Avatar: ".concat(avatar));
    console.log("-------------------");
}
showProfile(profile1);
showProfile(profile2);
