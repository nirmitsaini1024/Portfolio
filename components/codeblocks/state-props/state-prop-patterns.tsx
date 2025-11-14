import { Example } from "../exampletypes";

export const statePropPatterns: Example = {
  code: `// Pattern 1: Props Down, Events Up
function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  
  return (
    <div>
      <TodoInput onAdd={addTodo} />  {/* Pass handler as prop */}
      <TodoList todos={todos} />  {/* Pass data as prop */}
    </div>
  );
}

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);  // Call parent's handler
    setInput('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Pattern 2: Derived State from Props
function UserGreeting({ user }) {
  // Don't copy props to state!
  // const [name, setName] = useState(user.name); // ❌ BAD
  
  // ✅ GOOD: Use props directly
  return <h1>Hello, {user.name}!</h1>;
  
  // ✅ GOOD: If you need to modify, use derived state
  const displayName = user.name.toUpperCase();
  return <h1>Hello, {displayName}!</h1>;
}

// Pattern 3: State with Props Initialization
function Counter({ initialCount = 0 }) {
  // ✅ GOOD: Initialize state from prop, but manage it internally
  const [count, setCount] = useState(initialCount);
  
  // State is independent after initialization
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
  language: "jsx",
  filename: "state-prop-patterns.jsx",
  highlightLines: [],
};

