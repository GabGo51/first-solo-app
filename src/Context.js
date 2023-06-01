import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false)
  

  return (
      <ThemeContext.Provider value={{light, setLight}}>
          {children}
      </ThemeContext.Provider>
  )
};