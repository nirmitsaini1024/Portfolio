import { Example } from "../exampletypes";

export const useState: Example = {
  code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
  language: "jsx",
  filename: "useState.jsx",
  highlightLines: [3, 4, 8, 11, 14],
};

