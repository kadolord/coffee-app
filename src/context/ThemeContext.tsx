import React, { createContext, useContext, useState } from "react";
import lightTheme from "../constants/themes/light.json";
import darkTheme from "../constants/themes/dark.json";
import { ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: any }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  // Type guard: If the context is undefined, throw an error
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
