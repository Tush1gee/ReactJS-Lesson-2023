import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HeaderFunc from "./Header";

export default function HomeFunc() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    if (formSubmitted) {
        return <Navigate to={'/login'}/>
     }

    const handleSubmit = function (event) {
        event.prevenDefault();
        setFormSubmitted(true)
    };

  return (
    <div className="register-area">
        <HeaderFunc/>
      <h1>Register page</h1>
      <form>
        <label htmlFor="email">Email: </label>
        <input name="email" type="email"></input>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
