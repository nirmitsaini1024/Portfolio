import { Example } from "../exampletypes";

export const promiseBasics: Example = {
  code: `// A Promise is an object representing a value you'll get later
// It has three states: pending, fulfilled, and rejected

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Operation completed!');  // Fulfilled state
    } else {
      reject('Operation failed!');  // Rejected state
    }
  }, 1000);
});

// Promise states:
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: Operation completed successfully
// 3. Rejected: Operation failed

// Using the Promise
myPromise
  .then((result) => {
    console.log(result);  // "Operation completed!"
  })
  .catch((error) => {
    console.error(error);  // "Operation failed!"
  });

// Simple example: Fetching data
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 30 });
  }, 2000);
});

fetchUser.then(user => {
  console.log(user);  // { name: 'John', age: 30 }
});`,
  language: "javascript",
  filename: "promise-basics.js",
  highlightLines: [8, 13, 15, 26, 27, 30, 35, 37],
};

