import { useState } from "react";

export default function CounterFunc() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <h1><i class="fa-solid fa-cart-shopping"></i> {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}><i class="fa-solid fa-cart-plus"></i></button>
    </div>
  );
}
