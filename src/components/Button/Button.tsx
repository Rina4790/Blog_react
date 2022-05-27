import styles from "./Button.module.css";
import { useContext } from "react";
import { Context } from "../Theme/ThemeContext";

export interface IButton {
  children?: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: IButton) => {
  const { isDark } = useContext(Context);
  return (
    <button
      className={
        isDark ? `${styles.button} ${styles.button_dark}` : `${styles.button}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
