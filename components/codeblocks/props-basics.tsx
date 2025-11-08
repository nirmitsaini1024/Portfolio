import { Example } from "./exampletypes";

export const propsBasics: Example = {
  code: `// Props are read-only data passed from parent to child
function WelcomeMessage({ name, age, isActive }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// Parent component passes props
function App() {
  return (
    <WelcomeMessage 
      name="John" 
      age={25} 
      isActive={true} 
    />
  );
}

// Props are immutable - this will cause an error
function BadExample({ count }) {
  count = count + 1; // ❌ Error: Cannot assign to read-only property
  return <div>{count}</div>;
}`,
  language: "jsx",
  filename: "props-basics.jsx",
  highlightLines: [],
};

