import { Example } from "../exampletypes";

export const controlledComponents: Example = {
  code: `// Controlled Component: Parent controls the value via props
function App() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <ControlledInput 
      value={inputValue}  // Value comes from parent state
      onChange={setInputValue}  // Parent controls updates
    />
  );
}

function ControlledInput({ value, onChange }) {
  return (
    <input 
      value={value}  // Controlled by parent
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// Uncontrolled Component: Component manages its own state
function UncontrolledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value}  // Controlled internally
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// When to use controlled?
// - Need to access value from parent
// - Multiple components need to sync
// - Form validation at parent level
// - Reset form from parent

// When to use uncontrolled?
// - Simple local input
// - No need to access value externally
// - Better performance (fewer re-renders)`,
  language: "jsx",
  filename: "controlled-components.jsx",
  highlightLines: [],
};

