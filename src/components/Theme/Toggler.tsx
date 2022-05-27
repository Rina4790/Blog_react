import { useContext } from "react";
import { Context } from "./ThemeContext";

export interface IToggler {}

export const Toggler = () => {
  const { isDark, changeIsDark } = useContext(Context);

  return (
    <img
      src={isDark ? "img/dark.png" : "img/light.png"}
      onClick={changeIsDark}
    />
  );
};
