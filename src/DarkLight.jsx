import { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((pre) => (pre === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function DarkLight() {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen text-4xl  ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-black"}`}
    >
      <h1>Dark Light Mode Website</h1>
      <p>Hello My React V19 Fans👍</p>
      <p>
        {theme === "dark" ? " Welcome to dark mode" : "Welcome to light mode"}
      </p>
      <button
        onClick={handleToggleTheme}
        className={`px-5 py-4 m-5 bg-blue-600 rounded-xl ${theme === "dark" ? "text-white" : "text-white"}`}
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to dark Mode"}
      </button>
    </div>
  );
}

export default DarkLight;
