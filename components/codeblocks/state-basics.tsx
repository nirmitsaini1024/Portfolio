import { Example } from "./exampletypes";

export const stateBasics: Example = {
  code: `import { useState } from 'react';

// State is mutable data owned by the component
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setName('John')}>
        Change Name
      </button>
    </div>
  );
}

// State changes trigger re-renders
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
  language: "jsx",
  filename: "state-basics.jsx",
  highlightLines: [5, 6, 12],
};

