import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Toggler } from "../Theme/Toggler";
import { useContext } from "react";
import { Context } from "../Theme/ThemeContext";

export interface IProps {
  closeNavbar: () => void;
}

export const Navbar = ({ closeNavbar }: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <div className={styles.navbar}>
      <img
        className={styles.close}
        src="img/cross_copy.svg"
        onClick={closeNavbar}
      />
      <div className={styles.navigation}>
        <ul>
          <li>
            {" "}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              onClick={closeNavbar}
              to="/"
            >
              All posts
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              onClick={closeNavbar}
              exact
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              onClick={closeNavbar}
              exact
              to="/registration"
            >
              Registration
            </NavLink>
          </li>
        </ul>
        <div className={styles.toggler}>
          {" "}
          <Toggler />
        </div>
      </div>
    </div>
  );
};
