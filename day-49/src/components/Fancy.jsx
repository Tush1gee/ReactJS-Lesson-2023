import Counter from "./components/Counter";
import { useState } from "react";

function App() {
    const [isFancy, setIsFancy] = useState(false);
    return (
      <div>
        <Counter isFancy={isFancy} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => {
              setIsFancy(e.target.checked);
            }}
          />
          USe fancy styling
        </label>
      </div>
    );
  }
  
  export default App;