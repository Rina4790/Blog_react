import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import styles from "./Input.module.css";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  type?: string;
  label?: string;
  error?: string;
}

export const Input = ({
  type = "text",
  label,
  value,
  error,
  onChange,
  onKeyDown,
}: IProps) => {
  return (
    <label className={styles.label}>
      {" "}
      {label ? <p>{label}</p> : null}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ""}`}
        onKeyDown={onKeyDown}
      />
      {error ? <p>{error}</p> : null}
    </label>
  );
};
