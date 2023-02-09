import React from "react";
import { useRef } from "react";

export default function InputFocus() {
    const inputUseRef = useRef(null);

    const handleFocus = () => {
       inputUseRef.current.focus(); // ref iin utgiig uurchluh bolongut current ashiglaj bga . event der target avdag shig adilhan
    };

    const handleBlur = () => {
       inputUseRef.current.blur()
    }

  return (
    <div>
        <input type="text" ref={inputUseRef}/>
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleBlur}>Blur</button>
    </div>
  )
}
