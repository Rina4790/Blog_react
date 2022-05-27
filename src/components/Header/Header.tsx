import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavBar } from "../NavBar/NavBar";
import { Container } from "../templates/Container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavBar = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  const { theme } = useContext(ThemeContext);

  return (
    <nav className={styles.header}>
      <Container isImage={false}>
        <div className={styles.menu}>
          <img
            src="/assets/img/menu.svg"
            alt="menu"
            className={styles.menuButton}
            onClick={() => setIsActive(!isActive)}
            style={{
              filter: theme.filter,
            }}
          />
        </div>
      </Container>
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
