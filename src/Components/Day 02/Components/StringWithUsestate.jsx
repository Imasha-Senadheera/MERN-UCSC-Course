import React, { useState } from "react";

export default function StringWithUseState() {
  const [inputText, setInputText] = useState("");
  const [transformedText, setTransformedText] = useState("");

  // Transform input text to uppercase
  const handleUppercase = () => {
    setTransformedText(inputText.toUpperCase());
  };

  // Transform input text to lowercase
  const handleLowercase = () => {
    setTransformedText(inputText.toLowerCase());
  };

  // Reverse the input text
  const handleReverse = () => {
    setTransformedText(inputText.split('').reverse().join(''));
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        style={inputStyle}
      />
      <p style={outputStyle}>{transformedText}</p>
      <div style={buttonContainerStyle}>
        <button onClick={handleUppercase} style={buttonStyle}>Uppercase</button>
        <button onClick={handleLowercase} style={buttonStyle}>Lowercase</button>
        <button onClick={handleReverse} style={buttonStyle}>Reverse</button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
};

const outputStyle = {
  margin: '10px 0',
  fontSize: '18px',
  fontWeight: 'bold',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};
