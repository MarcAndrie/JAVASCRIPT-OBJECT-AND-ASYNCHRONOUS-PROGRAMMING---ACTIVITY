// 1. Make an array containing at least 5 JavaScript objects
const users = [
  { id: 1, name: "Alice", age: 28, isActive: true },
  { id: 2, name: "Bob", age: 34, isActive: false },
  { id: 3, name: "Carol", age: 25, isActive: true },
  { id: 4, name: "David", age: 41, isActive: true },
  { id: 5, name: "Emma", age: 30, isActive: false }
];
// A. Make an array containing at least 5 JavaScript objects.
console.log("Original Array:");
console.log(users);
console.log("\n---\n");

// B. Use the same array and use the forEach() method to print each object in the array. 
console.log("2. forEach() - Print each object:");
users.forEach(user => {
  console.log(user);
});
console.log("\n---\n");

// C.  Use the same array and demonstrate a sample code using the push() method on the array.
console.log("3. push() - Add new user to end:");
users.push({ id: 6, name: "Frank", age: 27, isActive: true });
console.log(users);
console.log("\n---\n");

// D. Use the same array and demonstrate a sample code using the unshift() method on the array.
console.log("4. unshift() - Add new user to beginning:");
users.unshift({ id: 0, name: "Zoe", age: 22, isActive: true });
console.log(users);
console.log("\n---\n");

// E. Use the same array and demonstrate a sample code using the filter() method on the array.
console.log("5. filter() - Get only active users:");
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers);
console.log("\n---\n");

// F. Use the same array and demonstrate a sample code using the map() method on the array.
console.log("6. map() - Get array of just names:");
const names = users.map(user => user.name);
console.log(names);
console.log("\n---\n");

// G.  Use the same array and demonstrate a sample code using the reduce() method on the array.
console.log("7. reduce() - Calculate total age:");
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(`Total age: ${totalAge}`);
console.log("\n---\n");

// H. Use the same array and demonstrate a sample code using the some() method on the array.
console.log("8. some() - Is there at least one user under 25?");
const hasYoungUser = users.some(user => user.age < 25);
console.log(hasYoungUser);
console.log("\n---\n");

// I. Use the same array and demonstrate a sample code using the every() method on the array.
console.log("9. every() - Are all users active?");
const allActive = users.every(user => user.isActive === true);
console.log(allActive);