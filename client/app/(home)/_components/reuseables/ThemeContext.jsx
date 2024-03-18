// ThemeContext.js
import React, { createContext, useState, useMemo } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    backgroundColor: "#f0f0f0",
    textColor: "#333",
  });

  const memoizedValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider };
