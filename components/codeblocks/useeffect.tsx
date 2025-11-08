import { Example } from "./exampletypes";

export const useEffect: Example = {
  code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch user data when component mounts or userId changes
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setUser(userData);
      setLoading(false);
    }
    
    fetchUser();
    
    // Cleanup function (runs when component unmounts or before re-running effect)
    return () => {
      // Cancel any pending requests
      console.log('Cleanup: Component unmounting or userId changed');
    };
  }, [userId]); // Dependency array: effect runs when userId changes
  
  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
}`,
  language: "jsx",
  filename: "useEffect.jsx",
  highlightLines: [6, 17, 20, 21],
};

