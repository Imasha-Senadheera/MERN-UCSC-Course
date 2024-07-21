import React from 'react';
import './SimpleComponent.css'; 

const SimpleComponent = () => {
  return (
    <div>
      <header>
        <h1>Simple React Component</h1>
      </header>

      <main>
        <p>Welcome to my simple React component!</p>
        <p>This is an example of a React component with external CSS.</p>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default SimpleComponent;
