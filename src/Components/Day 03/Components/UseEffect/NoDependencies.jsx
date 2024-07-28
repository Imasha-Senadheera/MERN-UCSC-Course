import React, { useState, useEffect } from "react";
import "../../styles/DependencyArray.css";

export default function NoDependencies() {
  const [count, setCount] = useState(0);

  // Effect runs after every render
  useEffect(() => {
    console.log("Component updated! Current count:", count);
  }); // No dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
