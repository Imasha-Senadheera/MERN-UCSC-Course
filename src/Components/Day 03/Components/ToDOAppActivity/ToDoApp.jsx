import React, { useState, useRef, useEffect, useReducer } from 'react';
import './ToDoApp.css';

const initialState = { items: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item, index) => index !== action.payload) };
    case 'CLEAR_ITEMS':
      return { items: [] };
    default:
      return state;
  }
};

export default function ToDoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  const clearItems = () => {
    dispatch({ type: 'CLEAR_ITEMS' });
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a to-do item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {state.items.length > 0 && <button onClick={clearItems}>Clear All</button>}
    </div>
  );
}
