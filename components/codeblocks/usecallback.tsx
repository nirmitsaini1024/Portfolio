import { Example } from "./exampletypes";

export const useCallback: Example = {
  code: `import { useState, useCallback, memo } from 'react';

// Child component that receives a callback
const ChildComponent = memo(({ onClick, name }) => {
  console.log(\`Rendering \${name}\`);
  return <button onClick={onClick}>{name}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Child');
  
  // Without useCallback: new function created on every render
  // const handleClick = () => console.log('Clicked');
  
  // With useCallback: function is memoized and only recreated when dependencies change
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty deps: function never changes
  
  // Another example with dependency
  const handleNameChange = useCallback((newName) => {
    setName(newName);
  }, []); // setName is stable, so empty deps is fine
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} name={name} />
    </div>
  );
}`,
  language: "jsx",
  filename: "useCallback.jsx",
  highlightLines: [12, 13, 14, 15, 16],
};

