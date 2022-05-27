import { useState } from "react";
import styles from "./Slider.module.css";

export const Slider = ({}) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <>
      <div className={styles["container"]}>
        <div
          className={styles["inner-container"]}
          style={{
            width: 130 * 7,
            transform: `translateX(${-index * (130 * 2)}px)`,
          }}
        >
          <div className={styles.card}>1</div>
          <div className={styles.card}>2</div>
          <div className={styles.card}>3</div>
          <div className={styles.card}>4</div>
          <div className={styles.card}>5</div>
          <div className={styles.card}>6</div>
          <div className={styles.card}>7</div>
        </div>
      </div>
      {index === 0 ? null : (
        <button onClick={() => setIndex((prev) => prev - 1)}>{"<"}</button>
      )}
      {index === 3 ? null : (
        <button onClick={() => setIndex((prev) => prev + 1)}>{">"}</button>
      )}
    </>
  );
};
