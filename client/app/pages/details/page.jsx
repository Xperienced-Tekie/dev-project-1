"use client";

import Details from "./Details";
// import { useContext } from "react";
// import { ThemeContext } from "../../(home)/_components/reuseables/ThemeContext";
const pages = () => (
  // const { theme, setTheme } = useContext(ThemeContext);

  // const toggleTheme = () => {
  // Example of toggling between light and dark theme
  //   const newTheme = {
  //     backgroundColor: theme.backgroundColor === "#f0f0f0" ? "#333" : "#f0f0f0",
  //     textColor: theme.textColor === "#333" ? "#f0f0f0" : "#333",
  //   };
  //   setTheme(newTheme);
  // };

  <div
  // style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
  >
    {/* <button onClick={toggleTheme}>Toggle Theme</button>
      This component will have background color and text color defined by the
      theme. */}
    <Details />
  </div>
);
export default pages;
