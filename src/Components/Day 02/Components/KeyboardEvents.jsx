import React from 'react';

export default function KeyboardEvents() {
  // Event handler functions
  const handleKeyDown = (e) => {
    console.log('Key Down:', e.key);
  };

  const handleKeyPress = (e) => {
    console.log('Key Press:', e.key);
  };

  const handleKeyUp = (e) => {
    console.log('Key Up:', e.key);
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        onKeyDown={handleKeyDown}  // Fired when a key is pressed down
        onKeyPress={handleKeyPress} // Fired when a key is pressed
        onKeyUp={handleKeyUp} // Fired when a key is released
        placeholder="Type something..."
        style={inputStyle}
      />
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
};

const inputStyle = {
  marginTop: '10px',
  padding: '10px',
  width: '100%',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};
