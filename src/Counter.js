import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(99);
  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  );
};

export default Counter;
