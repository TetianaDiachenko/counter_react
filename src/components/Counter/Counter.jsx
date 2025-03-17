import React, { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css'; 

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <Button onClick={() => setCount((count) => count + 1)}>
        Click me
      </Button>
      <h1>Counter: {count}</h1>
    </div>
  );
}