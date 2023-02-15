import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UserRegisterForm from "./components/UserRegisterForm";
import Users from "./components/Users";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1> DAY - 62 USER CRUD ADMIN</h1>
      <h5>USER REGISTER FORM</h5>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
