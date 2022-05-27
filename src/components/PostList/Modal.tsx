import { ReactNode } from "react";
import styles from "./PostList.module.css";

interface IProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isVisible, onClose }: IProps) => {
  return isVisible ? (
    <>
      <div className={styles.background} onClick={onClose}></div>
      <div className={styles.inner}>
        <div onClick={onClose}>X</div>
        {children}
      </div>
    </>
  ) : null;
};
