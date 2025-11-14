import { Example } from "../exampletypes";

export const promiseStates: Example = {
  code: `// Understanding Promise States

// 1. PENDING - Initial state
const pendingPromise = new Promise((resolve, reject) => {
  // Promise is pending until resolve or reject is called
  console.log('Promise is pending...');
  // Not calling resolve/reject yet - stays pending
});

// 2. FULFILLED - Successfully completed
const fulfilledPromise = Promise.resolve('Success!');
// Immediately fulfilled with value 'Success!'

fulfilledPromise.then(value => {
  console.log(value);  // "Success!"
});

// 3. REJECTED - Failed
const rejectedPromise = Promise.reject('Error occurred!');
// Immediately rejected with error 'Error occurred!'

rejectedPromise.catch(error => {
  console.error(error);  // "Error occurred!"
});

// Checking Promise state (using a helper)
function checkPromiseState(promise) {
  // Note: There's no direct way to check state in JavaScript
  // But we can infer it from behavior
  
  let state = 'pending';
  
  promise
    .then(() => {
      state = 'fulfilled';
      console.log('Promise is fulfilled');
    })
    .catch(() => {
      state = 'rejected';
      console.log('Promise is rejected');
    });
  
  return state;
}

// Example: Promise that transitions from pending to fulfilled
const asyncOperation = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Data loaded');
  }, 1000);
});

console.log('Promise created - state: pending');
asyncOperation.then(result => {
  console.log('Promise resolved - state: fulfilled');
  console.log('Result:', result);
});`,
  language: "javascript",
  filename: "promise-states.js",
  highlightLines: [7, 14, 17, 22, 25, 50, 52, 57],
};

