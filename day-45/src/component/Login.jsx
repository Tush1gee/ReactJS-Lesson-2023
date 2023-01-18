import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import HeaderFunc from "./Header";

export default function LoginFunc() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    loginName: "Tushig@gmail.com",
    password: "12345678",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("Амжилттай нэвтэрлээ ✅");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("Нэвтрэх нэр эсвэл нууц үг буруу байна ⭕");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    }
  };

  return (
    <div className="login-area">
      <HeaderFunc />
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login Name</label>
        <input name="username" type="email" /> <br />
        <label htmlFor="password">password</label>
        <input name="password" type="password" /> <br />
        <button>Sign in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
