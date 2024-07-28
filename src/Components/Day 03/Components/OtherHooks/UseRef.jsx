import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null); // Create a ref for the input element

  useEffect(() => {
    // Focus the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container">
      <input ref={inputRef} type="text" placeholder="I'll be focused on load" />
    </div>
  );
}
