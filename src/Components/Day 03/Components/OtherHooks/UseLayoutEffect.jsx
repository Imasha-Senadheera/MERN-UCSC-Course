import React, { useLayoutEffect, useRef, useState } from 'react';

export default function UseLayoutEffect() {
  const [width, setWidth] = useState(100); // Width in pixels
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const currentWidth = boxRef.current.offsetWidth;
      if (currentWidth > 500) {
        setWidth(500);
      }
    }
  }, [width]);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <div ref={boxRef} 
          style={{ 
            width: `${width}px`, 
            backgroundColor: 'lightblue', 
            padding: '10px' ,
          }}>
        Resize me if width greater than 500!
      </div>
      <button onClick={() => setWidth(width + 100)}>Increase Width</button>
      <button onClick={() => setWidth(width - 100)}>Decrease Width</button>
    </div>
  );
}

