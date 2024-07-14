import "./App.css";
import UserProfile from "./Components/userProfile"; // Import the UserProfile component
import State from "./Components/count"; // Import the State component from count.jsx
import Welcome from "./Components/hello"; // Import the Welcome component

function App() {
  return (
    <div>
      <Welcome name="John Doe" />
      <br></br>
      <br></br>
      <UserProfile name="John Doe" age={23} email="john.doe@example.com" />
      <br></br>
      <br></br>
      <State />
    </div>
  );
}

export default App;
