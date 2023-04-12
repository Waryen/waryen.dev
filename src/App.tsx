import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const resetCallback = () => {
    setCount(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>waryen.dev</h1>
      <p>
        You have been here for {count} {count == 0 ? 'second' : 'seconds'}.
      </p>
      <button onClick={resetCallback}>Reset the timer</button>
    </div>
  );
}
