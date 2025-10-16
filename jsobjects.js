// 1. Make an array containing at least 5 JavaScript objects
const users = [
  { id: 1, name: "Alice", age: 28, isActive: true },
  { id: 2, name: "Bob", age: 34, isActive: false },
  { id: 3, name: "Carol", age: 25, isActive: true },
  { id: 4, name: "David", age: 41, isActive: true },
  { id: 5, name: "Emma", age: 30, isActive: false }
];

console.log("Original Array:");
console.log(users);
console.log("\n---\n");

// 2. forEach() - Print each object
console.log("2. forEach() - Print each object:");
users.forEach(user => {
  console.log(user);
});
console.log("\n---\n");

// 3. push() - Add a new object to the end
console.log("3. push() - Add new user to end:");
users.push({ id: 6, name: "Frank", age: 27, isActive: true });
console.log(users);
console.log("\n---\n");

// 4. unshift() - Add a new object to the beginning
console.log("4. unshift() - Add new user to beginning:");
users.unshift({ id: 0, name: "Zoe", age: 22, isActive: true });
console.log(users);
console.log("\n---\n");

// 5. filter() - Get only active users
console.log("5. filter() - Get only active users:");
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers);
console.log("\n---\n");

// 6. map() - Get array of just names
console.log("6. map() - Get array of just names:");
const names = users.map(user => user.name);
console.log(names);
console.log("\n---\n");

// 7. reduce() - Calculate total age of all users
console.log("7. reduce() - Calculate total age:");
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(`Total age: ${totalAge}`);
console.log("\n---\n");

// 8. some() - Check if at least one user is under 25
console.log("8. some() - Is there at least one user under 25?");
const hasYoungUser = users.some(user => user.age < 25);
console.log(hasYoungUser);
console.log("\n---\n");

// 9. every() - Check if all users are active
console.log("9. every() - Are all users active?");
const allActive = users.every(user => user.isActive === true);
console.log(allActive);