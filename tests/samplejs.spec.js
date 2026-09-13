import{test, expect} from '@playwright/test' 
// JS Fundamentals: Variables, Data Types, Arrow Functions, Objects
test("JavaScript Fundamentals", async () => {

// VARIABLE: const (default), let (reassignable/changes), var (avoid)
// DATA TYPES: string, number, boolen, null
// Use typeof to check type

let age=30;
console.log("type of age:", typeof age);

age="Ravi";
console.log("type of age after reassignment:", typeof age);

let name = "Ravi"; //string
console.log("type of name:", typeof name);

if (age === 30) {
    console.log("Age is 30");

}else if (age === "Ravi") {
    console.log("Age is Ravi");
}

const users = ["admin", "standard_users"];
console.log(users[0], users[1]);
for (let i = 0; i < users.length; i++) {
    console.log(`User at index ${i}:`, users[i]);
}

for(const user of users) {
    console.log("User:", user);
}

const userDetails = {
    name: "Ravi",
    age: 30,
    isAdmin: true
};
console.log("User Details:", userDetails);
console.log("Username:", userDetails.name, "age:", userDetails.age, "isAdmin:", userDetails.isAdmin);

function greetUser(user) {
    return `Hello, ${user}!`;
}
let greeting = greetUser("Ravi");
console.log(greeting);

function add(a,b) {
    return a + b;
}
console.log(add(5, 3));

let add1 = (a, b) => {
    return a + b;
}
console.log(add1(5, 3));

const cred = {
    username: "admin",
    password: "admin123",
}

console.log("Username:", cred.username, "Password:", cred.password);

const { username, password } = cred;

console.log("Username:", username, "Password:", password);

try {
    throw new Error("This is a custom error");
} catch (error) {
    console.error("Caught an error:", error.message);
}

})