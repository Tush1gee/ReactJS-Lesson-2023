import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>DAY-48</h1>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </div>
  );
}

export default App;
