import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState({ 
    name: "theme-green", 
    color: "#299D91",
    background: "#FFFFFF",
    text: "#1A1A1A" 
  });

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Update theme based on dark mode
  useEffect(() => {
    if (darkMode) {
      setTheme({
        name: "theme-dark",
        color: "#299D91", // Tetap menggunakan warna aksen yang sama
        background: "#1A1A1A",
        text: "#FFFFFF"
      });
      document.body.classList.add('dark-mode');
    } else {
      setTheme({
        name: "theme-green",
        color: "#299D91",
        background: "#FFFFFF",
        text: "#1A1A1A"
      });
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Nilai yang akan dishare ke seluruh komponen
  const value = {
    theme,
    setTheme,
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};