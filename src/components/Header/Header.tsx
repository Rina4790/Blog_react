import styles from "./Header.module.css";
import { useState } from "react";
import { Navbar } from "../NavBar/Navbar";
import { useContext } from "react";
import { Context } from "../Theme/ThemeContext";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavbar = () => {
    setIsActive(false);
  };
  const { isDark } = useContext(Context);
  return (
    <nav
      className={
        isDark ? `${styles.header} ${styles.header_dark}` : `${styles.header}`
      }
    >
      <img
        className={styles.menu}
        src={isDark ? "img/menu_dark.png" : "img/menu.svg"}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? <Navbar closeNavbar={closeNavbar} /> : null}
    </nav>
  );
};
