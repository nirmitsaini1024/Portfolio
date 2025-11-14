import { Example } from "../exampletypes";

export const promiseAll: Example = {
  code: `// Promise.all() - Wait for all promises to resolve

// All promises must succeed
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);  // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);  // If any promise rejects
  });

// Real-world example: Fetching multiple resources
const fetchUser = fetch('/api/user').then(r => r.json());
const fetchPosts = fetch('/api/posts').then(r => r.json());
const fetchComments = fetch('/api/comments').then(r => r.json());

Promise.all([fetchUser, fetchPosts, fetchComments])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('One or more requests failed:', error);
  });

// Promise.all() fails fast - if one rejects, all fail
const p1 = Promise.resolve('Success 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('Success 3');

Promise.all([p1, p2, p3])
  .then(values => {
    console.log(values);  // Won't execute
  })
  .catch(error => {
    console.error(error);  // "Error 2" - fails immediately
  });

// Promise.allSettled() - Wait for all, regardless of outcome
Promise.allSettled([p1, p2, p3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1} succeeded:\`, result.value);
      } else {
        console.log(\`Promise \${index + 1} failed:\`, result.reason);
      }
    });
  });

// Promise.race() - First promise to settle wins
const fastPromise = new Promise(resolve => 
  setTimeout(() => resolve('Fast'), 100)
);
const slowPromise = new Promise(resolve => 
  setTimeout(() => resolve('Slow'), 1000)
);

Promise.race([fastPromise, slowPromise])
  .then(result => {
    console.log(result);  // "Fast" - first to complete
  });

// Use case: Timeout pattern
function fetchWithTimeout(url, timeout = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeout)
  );
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('/api/data', 3000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.message === 'Timeout') {
      console.error('Request timed out');
    } else {
      console.error('Request failed:', error);
    }
  });`,
  language: "javascript",
  filename: "promise-all.js",
  highlightLines: [7, 8, 9, 11, 12, 20, 21, 22, 24, 25, 35, 36, 37, 39, 43, 48, 51, 54, 60, 61, 67, 69, 73, 74, 75, 79, 82, 86],
};

