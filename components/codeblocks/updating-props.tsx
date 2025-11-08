import { Example } from "./exampletypes";

export const updatingProps: Example = {
  code: `// ❌ CANNOT UPDATE PROPS DIRECTLY - This will cause an error
function ChildComponent({ count }) {
  // Trying to modify props directly - THIS WON'T WORK!
  count = count + 1; // ❌ Error: Cannot assign to read-only property
  props.count = 10;  // ❌ Error: Cannot assign to read-only property
  
  return <div>Count: {count}</div>;
}

// ✅ CORRECT WAY: Use callback functions (Props Down, Events Up)
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Parent count: {count}</p>
      <ChildComponent 
        count={count}              // Pass data down as prop
        onIncrement={() => setCount(count + 1)}  // Pass callback as prop
      />
    </div>
  );
}

function ChildComponent({ count, onIncrement }) {
  // Child can't modify props, but can call parent's callback
  return (
    <div>
      <p>Child received count: {count}</p>
      <button onClick={onIncrement}>
        Increment (calls parent's function)
      </button>
    </div>
  );
}

// ✅ ALTERNATIVE: Use local state if child needs independent value
function ChildWithLocalState({ initialCount }) {
  // Initialize local state from prop, but manage independently
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <p>Local count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment (local state)
      </button>
    </div>
  );
}

// Key Points:
// 1. Props are IMMUTABLE - you cannot change them
// 2. To "update" props, parent must update its state
// 3. Child communicates with parent via callback functions
// 4. This maintains unidirectional data flow`,
  language: "jsx",
  filename: "updating-props.jsx",
  highlightLines: [],
};

