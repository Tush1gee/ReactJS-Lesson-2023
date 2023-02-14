import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1> DAY - 62 USER CRUD ADMIN</h1>
      <h5>USER REGISTER FORM</h5>
      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
