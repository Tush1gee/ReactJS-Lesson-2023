import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Body() {

    const {theme , setTheme} = useTheme()

    const [styleClass, setStyleClass] = useState()

    useEffect(() => {
        setStyleClass(`${theme} middle container`)
    }, [theme]);

  return (
    <div className={styleClass}>
        <p> Body </p>
    </div>
  )
}
