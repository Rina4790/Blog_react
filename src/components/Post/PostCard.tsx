import styles from "./PostCard.module.css";
import { useHistory } from "react-router-dom";

export interface IProps {
  id: number;
  title: string;
  text: string;
  image: string;
  date: number;
}

export const PostCard = ({ id, title, text, image, date }: IProps) => {
  const history = useHistory();

  return (
    <div
      className={styles.card}
      onClick={() => {
        history.push("/post/" + id);
      }}
    >
      <img src={image} alt=" " />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};
