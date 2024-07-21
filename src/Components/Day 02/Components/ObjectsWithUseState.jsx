import React, { useState } from "react";

export default function ObjectsWithUseState() {
  // Initialize state
  const [user, setUser] = useState({ name: "John", age: 30 });
  const [newName, setNewName] = useState('');

  // Function to handle name change
  const changeName = () => {
    if (newName.trim() !== '') {
      setUser(prevUser => ({ ...prevUser, name: newName }));
      setNewName(''); // Clear the input field after updating the name
    }
  };

  // Function to handle age increment
  const incrementAge = () => {
    setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  // Function to handle age decrement
  const decrementAge = () => {
    setUser(prevUser => ({ ...prevUser, age: prevUser.age - 1 }));
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Objects With UseState Examples</h1>
      <p style={textStyle}>
        {user.name} is {user.age} years old
      </p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
        style={inputStyle}
      />
      <button onClick={changeName} style={buttonStyle}>
        Change Name
      </button>
      <button onClick={incrementAge} style={buttonStyle}>
        Increment Age
      </button>
      <button onClick={decrementAge} style={buttonStyle}>
        Decrement Age
      </button>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "500px",
  margin: "0 auto",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "24px",
  marginBottom: "20px",
};

const textStyle = {
  fontSize: "18px",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
  margin: "5px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: "10px",
  width: "200px",
};
