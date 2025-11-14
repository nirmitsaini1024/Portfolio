import { Example } from "../exampletypes";

export const promiseAdvanced: Example = {
  code: `// Advanced Promise Patterns

// 1. Converting Callbacks to Promises
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    // Simulating file read
    setTimeout(() => {
      if (filename) {
        resolve(\`Content of \${filename}\`);
      } else {
        reject(new Error('Filename required'));
      }
    }, 1000);
  });
}

// 2. Retry Pattern
function retryPromise(fn, maxRetries = 3) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    function attempt() {
      fn()
        .then(resolve)
        .catch(error => {
          attempts++;
          if (attempts >= maxRetries) {
            reject(error);
          } else {
            console.log(\`Retry attempt \${attempts}\`);
            setTimeout(attempt, 1000);
          }
        });
    }
    
    attempt();
  });
}

// Usage
retryPromise(() => fetch('/api/data'))
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Failed after retries:', error));

// 3. Sequential Processing with reduce
const urls = ['/api/user', '/api/posts', '/api/comments'];

urls.reduce((promise, url) => {
  return promise.then(results => {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        results.push(data);
        return results;
      });
  });
}, Promise.resolve([]))
  .then(allResults => {
    console.log('All data:', allResults);
  });

// 4. Promise Pool (Limit Concurrent Promises)
function promisePool(tasks, limit) {
  const results = [];
  let running = 0;
  let index = 0;
  
  return new Promise((resolve) => {
    function runNext() {
      if (index >= tasks.length && running === 0) {
        resolve(results);
        return;
      }
      
      while (running < limit && index < tasks.length) {
        const currentIndex = index++;
        running++;
        
        tasks[currentIndex]()
          .then(result => {
            results[currentIndex] = result;
          })
          .catch(error => {
            results[currentIndex] = { error };
          })
          .finally(() => {
            running--;
            runNext();
          });
      }
    }
    
    runNext();
  });
}

// 5. Cancellable Promise
function cancellablePromise(executor) {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    cancel = () => {
      reject(new Error('Cancelled'));
    };
    executor(resolve, reject);
  });
  
  promise.cancel = cancel;
  return promise;
}

const task = cancellablePromise((resolve) => {
  setTimeout(() => resolve('Done'), 5000);
});

// Cancel after 2 seconds
setTimeout(() => task.cancel(), 2000);

task
  .then(result => console.log(result))
  .catch(error => console.log(error.message));  // "Cancelled"`,
  language: "javascript",
  filename: "promise-advanced.js",
  highlightLines: [7, 8, 12, 14, 21, 22, 26, 28, 30, 33, 44, 51, 52, 55, 60, 66, 71, 78, 82, 89, 101, 103, 104, 110, 114, 119],
};

