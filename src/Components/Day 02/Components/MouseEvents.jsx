import React from 'react';

export default function MouseEvents() {
  const handleClick = () => alert('Button Clicked!');
  const handleDoubleClick = () => alert('Button Double Clicked!');
  const handleMouseUp = () => alert('Mouse Up!');
  const handleMouseOut = () => alert('Mouse Out!');

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleClick}>
        Click me
      </button>

      <button style={buttonStyle} onDoubleClick={handleDoubleClick}>
        Double Click me
      </button>

      <div
        style={mouseAreaStyle}
        onMouseUp={handleMouseUp}
      >
        Mouse Down & Up here
      </div>

      <div style={moveAreaStyle}>
        Move Mouse Over here
      </div>

      <div
        style={mouseOutAreaStyle}
        onMouseOut={handleMouseOut}
      >
        Mouse Over & Out here
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
};

const mouseAreaStyle = {
  marginTop: '20px',
  padding: '30px',
  border: '1px solid black',
  textAlign: 'center',
};

const moveAreaStyle = {
  marginTop: '10px',
  height: '50px',
  border: '1px solid black',
  textAlign: 'center',
};

const mouseOutAreaStyle = {
  marginTop: '10px',
  height: '50px',
  border: '1px solid black',
  textAlign: 'center',
};
