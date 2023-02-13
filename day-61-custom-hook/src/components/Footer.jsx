import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {

    const {theme, setTheme} = useTheme()

    function handleSelectChange (e) {
        e.preventDefault()
        setTheme(e.target.value)
    }

  return (
    <div className="footer-container">
        <p> Footer</p>
        <select name="theme" onChange={handleSelectChange} defaultValue={theme}>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="green">green</option>
        </select>
    </div>
  )
}
