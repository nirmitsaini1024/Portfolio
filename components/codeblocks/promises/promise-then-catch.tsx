import { Example } from "../exampletypes";

export const promiseThenCatch: Example = {
  code: `// Using .then() and .catch()

// .then() - handles fulfilled promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise.then((value) => {
  console.log(value);  // "Success!"
});

// .catch() - handles rejected promises
const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error!'), 1000);
});

failingPromise
  .then((value) => {
    console.log(value);  // Won't execute
  })
  .catch((error) => {
    console.error(error);  // "Error!"
  });

// Chaining .then() calls
Promise.resolve(10)
  .then(value => {
    console.log(value);  // 10
    return value * 2;  // Return value for next .then()
  })
  .then(value => {
    console.log(value);  // 20
    return value + 5;
  })
  .then(value => {
    console.log(value);  // 25
  })
  .catch(error => {
    console.error(error);  // Catches errors from any .then()
  });

// .finally() - executes regardless of outcome
Promise.resolve('Data')
  .then(data => {
    console.log(data);
    return data.toUpperCase();
  })
  .finally(() => {
    console.log('Cleanup: This always runs');
  });

// Error handling in promise chains
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve('Data received');
      } else {
        reject('Network error');
      }
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log('Success:', data);
    return processData(data);
  })
  .then(processed => {
    console.log('Processed:', processed);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Request completed');
  });`,
  language: "javascript",
  filename: "promise-then-catch.js",
  highlightLines: [7, 11, 16, 17, 24, 29, 32, 46, 51, 56, 61, 77, 80],
};

