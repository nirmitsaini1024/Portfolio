import { Example } from "./exampletypes";

export const useRef: Example = {
  code: `import { useRef, useEffect, useState } from 'react';

function RefExample() {
  // 1. Accessing DOM elements
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  
  // 2. Storing mutable values that don't trigger re-renders
  const renderCount = useRef(0);
  const previousCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
    previousCount.current = count;
  });
  
  const focusInput = () => {
    // Direct DOM manipulation
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
      
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount.current}</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
  language: "jsx",
  filename: "useRef.jsx",
  highlightLines: [4, 7, 8, 15, 16],
};

