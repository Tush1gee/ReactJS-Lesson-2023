import { ThemeContext } from "@emotion/react";
import React, { createContext, useContext, useEffect, useState } from "react";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      {children}
    </ThemeContextProvider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
}
