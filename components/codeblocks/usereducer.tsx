import { Example } from "./exampletypes";

export const useReducer: Example = {
  code: `import { useReducer } from 'react';

// 1. Define the initial state
const initialState = { count: 0 };

// 2. Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  // 3. Use the reducer hook
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}`,
  language: "jsx",
  filename: "useReducer.jsx",
  highlightLines: [5, 6, 25, 28, 31],
};

