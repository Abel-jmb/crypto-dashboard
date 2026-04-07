import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const inithialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") || inithialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext)
export { ThemeProvider };
export default ThemeContext;

