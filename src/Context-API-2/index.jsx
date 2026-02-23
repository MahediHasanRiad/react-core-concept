import { useEffect, useState } from "react";
import ThemeBtn from "./components/themeBtn";
import Card from "./components/card";
import { ThemeProvider } from "./context/theme";

function DarkModeTheme() {

  const [themeMode, setThemeMode] = useState('light')

  // we don't know lightTheme/darkTheme funcation value, 
  // so create a function as a same theme-provider value name
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actually update theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark") // remove all prev class
    document.querySelector("html").classList.add(themeMode)          // add class
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <ThemeBtn />
          <Card darkMode={themeMode} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DarkModeTheme;
