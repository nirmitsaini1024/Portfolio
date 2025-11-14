import { Example } from "../exampletypes";

export const useMemo: Example = {
  code: `import { useState, useMemo } from 'react';

function ExpensiveCalculation({ numbers }) {
  // This expensive calculation only runs when 'numbers' changes
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Dependency array: recalculate only when numbers change
  
  return <div>Sum: {sum}</div>;
}

function App() {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {/* Sum won't recalculate when count changes */}
      <ExpensiveCalculation numbers={numbers} />
    </div>
  );
}`,
  language: "jsx",
  filename: "useMemo.jsx",
  highlightLines: [4, 5, 7, 8],
};

