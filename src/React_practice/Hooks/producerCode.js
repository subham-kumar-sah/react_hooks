import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
function Producer({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const arr = ["red", "green", "blue"];
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={{ darkTheme, arr }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </ThemeContext.Provider>
  );
}

export default Producer;
