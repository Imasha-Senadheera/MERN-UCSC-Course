import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudPost from "./Components/Day 07/Components/CRUD/CrudPost";
import CrudGet from "./Components/Day 07/Components/CRUD/CrudGet";
import CrudGetSpecific from "./Components/Day 07/Components/CRUD/CrudGetSpecific";
import CrudUpdate from "./Components/Day 07/Components/CRUD/CrudUpdate";
import CrudDelete from "./Components/Day 07/Components/CRUD/CrudDelete";
import LoginJWT from "./Components/Day 07/Components/Authorization/LoginJWT";
import Registration from "./Components/Day 07/Components/Authentication/Registration";
import PostJWT from "./Components/Day 07/Components/Authorization/PostJWT";
import GetSpecificUserMsgs from "./Components/Day 07/Components/Authorization/GetSpecificUserMsgs";
import ProtectedRoutesJWT from "./Components/Day 07/Components/Authorization/ProtectedRoutesJWT";
import GetJWT from "./Components/Day 07/Components/Authorization/GetJWT";
import LogoutButton from "./Components/Day 07/Components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<LoginJWT />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutesJWT />}>
            <Route path="/createPost" element={<PostJWT />} />
            <Route
              path="/getSpecificUserMsg"
              element={<GetSpecificUserMsgs />}
            />
            <Route path="/getAll" element={<GetJWT />} />
            <Route path="/crudGet" element={<CrudGet />} />
            <Route path="/crudGetSpecific" element={<CrudGetSpecific />} />
            <Route path="/crudUpdate" element={<CrudUpdate />} />
            <Route path="/crudDelete" element={<CrudDelete />} />
          </Route>

          {/* Logout */}
          <Route path="/logout" element={<LogoutButton />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
