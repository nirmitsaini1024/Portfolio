import { Example } from "../exampletypes";

export const commonQuestions: Example = {
  code: `// Q1: Can you pass state as props?
// ✅ YES - This is the most common pattern
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} />;  // State passed as prop
}

// Q2: Should you copy props to state?
// ❌ GENERALLY NO - Use props directly
function BadExample({ name }) {
  const [localName, setLocalName] = useState(name); // ❌ BAD
  // Problem: If prop changes, local state won't update
}

// ✅ GOOD: Use props directly
function GoodExample({ name }) {
  return <div>{name}</div>;  // Use prop directly
}

// ✅ EXCEPTION: Only copy to state if you need to modify it independently
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount); // ✅ OK
  // State is independent after initialization
}

// Q3: Can props be functions?
// ✅ YES - Functions are first-class values in JavaScript
function Parent() {
  const handleClick = () => console.log('Clicked');
  return <Button onClick={handleClick} />;
}

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

// Q4: What happens if you don't pass a prop?
// Props are undefined if not passed
function Greeting({ name }) {
  return <div>Hello, {name || 'Guest'}!</div>;
}

// Better: Use default parameters
function Greeting({ name = 'Guest' }) {
  return <div>Hello, {name}!</div>;
}

// Q5: Can you have both props and state in the same component?
// ✅ YES - Very common pattern
function UserCard({ user }) {  // Props
  const [isExpanded, setIsExpanded] = useState(false);  // State
  
  return (
    <div>
      <h3>{user.name}</h3>
      {isExpanded && <p>{user.bio}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Toggle
      </button>
    </div>
  );
}

// Q6: How do you share state between sibling components?
// Solution: Lift state up to common parent
function App() {
  const [count, setCount] = useState(0);  // Shared state
  
  return (
    <div>
      <Display count={count} />      {/* Sibling 1 */}
      <Controls 
        count={count} 
        setCount={setCount} 
      />  {/* Sibling 2 */}
    </div>
  );
}

// Q7: Can props be objects or arrays?
// ✅ YES - Any JavaScript value can be a prop
function UserList({ users }) {  // Array prop
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function UserProfile({ user }) {  // Object prop
  return <div>{user.name} - {user.email}</div>;
}

// Q8: What's the difference between controlled and uncontrolled?
// Controlled: Parent controls value via props
function ControlledInput({ value, onChange }) {
  return (
    <input 
      value={value}  // Controlled by parent
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// Uncontrolled: Component manages its own state
function UncontrolledInput() {
  const [value, setValue] = useState('');
  return (
    <input 
      value={value}  // Controlled internally
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Q9: Can you use props to initialize state?
// ✅ YES - But state becomes independent after initialization
function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  // If initialCount prop changes later, count won't update
  // Use useEffect if you need to sync with prop changes
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Q10: How to sync state with prop changes?
// Use useEffect to sync state when prop changes
function SyncedCounter({ count: propCount }) {
  const [count, setCount] = useState(propCount);
  
  useEffect(() => {
    setCount(propCount);  // Sync when prop changes
  }, [propCount]);
  
  return <div>{count}</div>;
}`,
  language: "jsx",
  filename: "common-questions.jsx",
  highlightLines: [],
};

