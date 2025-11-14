import { Example } from "../exampletypes";

export const promiseErrorHandling: Example = {
  code: `// Error Handling in Promises

// 1. Basic Error Handling
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => {
    console.error('Caught error:', error.message);
  });

// 2. Error in .then() chain
Promise.resolve(10)
  .then(value => {
    throw new Error('Error in then');
    return value * 2;
  })
  .then(value => {
    console.log('This won\'t execute');
  })
  .catch(error => {
    console.error('Caught:', error.message);
  });

// 3. Multiple .catch() handlers
Promise.reject('First error')
  .catch(error => {
    console.log('First catch:', error);
    throw 'Second error';
  })
  .catch(error => {
    console.log('Second catch:', error);
  });

// 4. Handling errors in Promise.all()
const promises = [
  Promise.resolve('Success 1'),
  Promise.reject('Error 2'),
  Promise.resolve('Success 3')
];

Promise.all(promises)
  .then(results => {
    console.log(results);  // Won't execute
  })
  .catch(error => {
    console.error('Promise.all failed:', error);
  });

// 5. Using Promise.allSettled() for partial failures
Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1} succeeded:\`, result.value);
      } else {
        console.log(\`Promise \${index + 1} failed:\`, result.reason);
      }
    });
  });

// 6. Error recovery
function fetchWithFallback(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    })
    .catch(error => {
      console.warn('Primary fetch failed, using fallback');
      return fetch('/api/fallback').then(r => r.json());
    });
}

// 7. Try-catch with async/await (for comparison)
async function handleErrors() {
  try {
    const result = await Promise.reject('Error');
    console.log(result);
  } catch (error) {
    console.error('Caught:', error);
  }
}

// 8. Unhandled Promise Rejections
// Always handle promise rejections!
const unhandled = Promise.reject('Unhandled error');
// This will cause "UnhandledPromiseRejectionWarning" in Node.js

// Proper handling:
unhandled.catch(error => {
  console.error('Handled:', error);
});`,
  language: "javascript",
  filename: "promise-error-handling.js",
  highlightLines: [7, 9, 15, 20, 22, 28, 33, 35, 36, 38, 43, 45, 49, 53, 58, 61, 64, 70, 72, 74, 78, 80, 85, 87, 90, 96, 100],
};

