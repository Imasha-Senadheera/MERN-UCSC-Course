import React, { useState } from 'react';

export default function ArraysWithUseState() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  // Add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Remove an item from the list by index
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Update an item in the list by index
  const updateItem = (index, updatedValue) => {
    const newItems = [...items];
    newItems[index] = updatedValue;
    setItems(newItems);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Arrays With UseState Examples</h1>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              style={inputStyle}
            />
            <button onClick={() => removeItem(index)} style={buttonStyle}>Remove</button>
          </li>
        ))}
      </ul>
      <div style={addItemContainerStyle}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item..."
          style={inputStyle}
        />
        <button onClick={addItem} style={addButtonStyle}>Add Item</button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const inputStyle = {
  flex: '1',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#dc3545',
  color: '#fff',
  cursor: 'pointer',
};

const addItemContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
};

const addButtonStyle = {
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#28a745',
  color: '#fff',
  cursor: 'pointer',
  marginLeft: '10px',
};
