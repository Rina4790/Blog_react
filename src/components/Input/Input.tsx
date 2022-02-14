import { ChangeEventHandler } from "react";

import styles from "./Input.module.css";

export interface IInput {
  value: string;
  type: string;
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ value, type, text, onChange }: IInput) => {
  return (
    <form className={styles.formElement}>
      <label className={styles.label}>
        {text}
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={styles.input}
        ></input>
      </label>
    </form>
  );
};
