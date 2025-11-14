import { Example } from "../exampletypes";

export const liftingState: Example = {
  code: `// Problem: Two siblings need to share state
// Solution: Lift state up to common parent

function App() {
  // State lifted to parent component
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Display count={count} />
      <Controls 
        count={count} 
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
      />
    </div>
  );
}

// Child component receives count as prop
function Display({ count }) {
  return <h1>Count: {count}</h1>;
}

// Another child receives count and setters as props
function Controls({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

// Why lift state up?
// - Multiple components need the same data
// - Data needs to stay in sync across components
// - Single source of truth for shared data`,
  language: "jsx",
  filename: "lifting-state.jsx",
  highlightLines: [4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28],
};

