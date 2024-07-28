import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent'; // Import ChildComponent

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>UseCallback Example</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}




