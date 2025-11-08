import { Example } from "./exampletypes";

export const whenToUse: Example = {
  code: `// ✅ USE PROPS WHEN:
// 1. Passing data from parent to child
function UserProfile({ user }) {
  return <div>{user.name} - {user.email}</div>;
}

// 2. Passing callback functions
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

// 3. Configuring child components
function Modal({ isOpen, title, children }) {
  if (!isOpen) return null;
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// ✅ USE STATE WHEN:
// 1. Data changes over time within component
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// 2. User interactions (form inputs, toggles)
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ... form logic
}

// 3. Component-specific UI state
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}

// ❌ DON'T use state for:
// - Props received from parent
// - Computed values (use useMemo instead)
// - Data that doesn't change

// ❌ DON'T use props for:
// - Data that needs to change within component
// - Internal component logic`,
  language: "jsx",
  filename: "when-to-use.jsx",
  highlightLines: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
};

