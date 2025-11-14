import { Example } from "../exampletypes";

export const propsVsState: Example = {
  code: `// ❌ WRONG: Trying to modify props
function UserCard({ name, age }) {
  // This won't work - props are read-only
  name = name.toUpperCase(); // Error!
  return <div>{name}, {age}</div>;
}

// ✅ CORRECT: Use state for mutable data
function UserCard({ initialName, age }) {
  const [name, setName] = useState(initialName);
  
  const handleNameChange = () => {
    setName(name.toUpperCase()); // Works!
  };
  
  return (
    <div>
      <p>{name}, {age}</p>
      <button onClick={handleNameChange}>Uppercase Name</button>
    </div>
  );
}

// ✅ CORRECT: Use props for passing data down
function Parent() {
  const [userName, setUserName] = useState('John');
  
  return (
    <ChildComponent 
      name={userName}  // Pass as prop
      onNameChange={setUserName}  // Pass setter as prop
    />
  );
}

function ChildComponent({ name, onNameChange }) {
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => onNameChange('Jane')}>
        Change Name
      </button>
    </div>
  );
}`,
  language: "jsx",
  filename: "props-vs-state.jsx",
  highlightLines: [3, 4, 5, 8, 9, 10, 11, 12, 23, 24, 25, 26, 27, 28],
};

