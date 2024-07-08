/* eslint-disable react/prop-types */
import { useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ Children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ setTheme, theme }}>
      {Children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
