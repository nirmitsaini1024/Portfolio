import { Example } from "./exampletypes";

export const useContext: Example = {
  code: `import { createContext, useContext, useState } from 'react';

// 1. Create a context
const ThemeContext = createContext();

// 2. Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Use the context in child components
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ 
        background: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

// 4. Wrap your app with the provider
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}`,
  language: "jsx",
  filename: "useContext.jsx",
  highlightLines: [3, 6, 12, 23, 24],
};

