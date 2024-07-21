import React, { useState } from 'react';

export default function FormEvents() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    alert('Form Submitted');
  };

  // Handle input field change
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Sets the state with the input value
    console.log('Input Tag:', e.target); // Logs the target input element
  };

  // Reset all fields
  const handleReset = () => {
    setInputValue('');
    setSelectValue('');
    setTextareaValue('');
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} onReset={handleReset} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="inputField" style={labelStyle}>Input:</label>
          <input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={handleInputChange} // Updates input value and logs the input tag
            onFocus={(e) => console.log('Input Focused', e.target)}
            onBlur={(e) => console.log('Input Blurred', e.target)}
            onInput={(e) => console.log('User Input Received', e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="selectField" style={labelStyle}>Select:</label>
          <select
            id="selectField"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)} // Updates select value
            onFocus={(e) => console.log('Select Focused', e.target)}
            onBlur={(e) => console.log('Select Blurred', e.target)}
            style={selectStyle}
          >
            <option value="">Choose</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="textareaField" style={labelStyle}>Textarea:</label>
          <textarea
            id="textareaField"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)} // Updates textarea value
            onFocus={(e) => console.log('Textarea Focused', e.target)}
            onBlur={(e) => console.log('Textarea Blurred', e.target)}
            style={textareaStyle}
          />
        </div>

        <div style={buttonContainerStyle}>
          <button type="submit" style={submitButtonStyle}>Submit</button>
          <button type="reset" style={resetButtonStyle}>Reset</button>
        </div>
      </form>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};

const labelStyle = {
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const selectStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  minHeight: '100px',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const submitButtonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

const resetButtonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#6c757d',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};
