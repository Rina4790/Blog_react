import { createContext, useState } from "react";

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

const darkTheme = {
  text: "#fff",
  background: "#000",
  greyText: "#fff",
};

const lightTheme = {
  text: "#000",
  background: "#fff",
  greyText: "#999",
};

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Context.Provider
      value={{
        isDark,
        changeIsDark,
        theme: isDark ? darkTheme : lightTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;
