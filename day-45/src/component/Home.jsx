import { Link } from "react-router-dom";
import HeaderFunc from "./Header";

export default function HomeFunc() {
  return (
    <div>
      <HeaderFunc />
      <div className="home-page-area">
        <h1>Home page</h1>
      </div>
    </div>
  );
}
