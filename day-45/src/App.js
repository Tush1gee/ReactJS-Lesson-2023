import AccordionFunc from "./component/Accordion";
import PanelFunc from "./component/Panel";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginFunc from "./component/Login";
import HomeFunc from "./component/Home";
import RegisterFunc from "./component/Register";
import HeaderFunc from "./component/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/accordion" element={<AccordionFunc />} />
        <Route path="/" element={<HomeFunc />} />
        <Route path="/login" element={<LoginFunc />} />
        <Route path="/register" element={<RegisterFunc />} />
      </Routes>
    </div>
  );
}

export default App;
