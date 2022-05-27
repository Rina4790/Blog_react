import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { PostCard, IProps } from "../Post/PostCard";
import styles from "./AllPosts.module.css";
import { useContext } from "react";
import { Context } from "../Theme/ThemeContext";

const LIMIT = 5;

export const AllPostsList = () => {
  const [posts, setPosts] = useState<IProps[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result) => setPosts([...posts, ...result.results]));
  }, [offset]);

  const loadMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  const { isDark } = useContext(Context);

  return (
    <div
      className={isDark ? `${styles.wrapper_dark}` : `${styles.wrapper_light}`}
    >
      <div className={styles.wrapper}>
        {posts.map((post: IProps) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              text={post.text}
              date={post.date}
            />
          );
        })}
      </div>
      <div className={styles.btn}>
        <Button onClick={loadMore}>LoadMore</Button>
      </div>
    </div>
  );
};
