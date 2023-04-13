import React, { useEffect, useState } from 'react';

type CounterProps = {
  initialCount?: number;
};

export default function Counter({ initialCount = 0 }: CounterProps) {
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
    <div className="flex grow justify-end flex-col items-center">
      <p className="mb-3">
        You have been here for{' '}
        <span className="italic font-bold text-red-500">
          {count} {count == 0 ? 'second' : 'seconds'}
        </span>
        .
      </p>
      {/*<button*/}
      {/*  className="border-2 rounded py-2 px-4 border-red-600 bg-red-600 hover:bg-red-500 hover:border-red-500 focus:bg-red-500 focus:border-red-500"*/}
      {/*  onClick={resetCallback}*/}
      {/*>*/}
      {/*  <span className="text-lg uppercase font-bold">Reset the timer</span>*/}
      {/*</button>*/}
    </div>
  );
}
