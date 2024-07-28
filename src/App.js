import React from "react";
import "./App.css";
import { LanguageProvider } from "./Components/Day 03/Components/LanguageToggleBarActivity/LanguageContext";
import LanguageComponent from "./Components/Day 03/Components/LanguageToggleBarActivity/LanguageComponent";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <LanguageComponent />
      </LanguageProvider>
    </div>
  );
}

export default App;
