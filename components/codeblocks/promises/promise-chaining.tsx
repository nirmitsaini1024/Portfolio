import { Example } from "../exampletypes";

export const promiseChaining: Example = {
  code: `// Promise Chaining - Sequential async operations

// Basic chaining
fetchUser(1)
  .then(user => {
    console.log('User:', user);
    return fetchPosts(user.id);  // Return next promise
  })
  .then(posts => {
    console.log('Posts:', posts);
    return fetchComments(posts[0].id);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error in chain:', error);
  });

// Helper functions
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John' });
    }, 500);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
    }, 500);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, text: 'Great post!' }]);
    }, 500);
  });
}

// Chaining with transformations
Promise.resolve(5)
  .then(x => {
    console.log('Step 1:', x);
    return x * 2;
  })
  .then(x => {
    console.log('Step 2:', x);
    return x + 10;
  })
  .then(x => {
    console.log('Step 3:', x);
    return x / 2;
  })
  .then(x => {
    console.log('Final:', x);  // 10
  });

// Error propagation in chains
Promise.resolve(10)
  .then(x => {
    if (x > 5) {
      throw new Error('Value too large');
    }
    return x * 2;
  })
  .then(x => {
    console.log('This won\'t execute');
    return x + 5;
  })
  .catch(error => {
    console.error('Caught error:', error.message);
    return 0;  // Return default value
  })
  .then(x => {
    console.log('After catch:', x);  // 0
  });`,
  language: "javascript",
  filename: "promise-chaining.js",
  highlightLines: [7, 10, 14, 19, 49, 52, 56, 60, 67, 70, 78, 80],
};

