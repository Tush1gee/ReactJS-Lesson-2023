import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import UseFetch from "../context/UseFetch";
import "../styles/middle.css";

export default function Middle() {

  const URL = 'https://dog.ceo/api/breeds/image/random'
  
  const { theme, setTheme } = useTheme();
  const {response, error} = UseFetch(URL, {})
  console.log(response);

  const [styleClass, setStyleClass] = useState();

  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
  }, [theme]);

  return (
    <div className={styleClass}>
      <p>Middle</p>
      {response.message &&  <img src={response.message} alt="Dog image" /> }
    </div>
  );
}
