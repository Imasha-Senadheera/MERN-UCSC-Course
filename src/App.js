import React from "react";
import "./App.css";
import { Parent } from "./Components/Day 03/Components/UseContext/Parent";
import ChildComponent from "./Components/Day 03/Components/UseContext/ChildComponent";

function App() {
  return (
    <div className="App">
      <Parent>
        <ChildComponent />
      </Parent>
    </div>
  );
}

export default App;
