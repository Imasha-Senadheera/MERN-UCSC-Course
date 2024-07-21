import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider } from "styled-components";
// import GlobelStyles from "./Components/Day 02/styles/GlobelStyles"; // Correct path

// Define your theme object
// const theme = {
//   colors: {
//     primary: "blue",
//     secondary: "green",
//   },
//   fonts: {
//     heading: "Poppins, sans-serif",
//     body: "Poppins, sans-serif",
//   },
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      {/* <GlobelStyles /> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

reportWebVitals();
