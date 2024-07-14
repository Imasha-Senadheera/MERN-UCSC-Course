import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <strong>You clicked</strong> {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setCount(count - 1)}>Count Down</button>
    </div>
  );
}
