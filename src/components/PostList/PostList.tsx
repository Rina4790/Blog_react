import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard } from "../Post/PostCard";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Container } from "../templates/Container/Container";
import styles from "./PostList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IState, store } from "../../redux/store";
import {
  fetchMorePosts,
  fetchPosts,
  searchPosts,
} from "../../redux/actions/postsActions";
import { Input } from "../Input/Input";

function debounce(fun: (text: string) => void, ms: number) {
  let isCooldown = false;
  let prevSearchText = "";

  return function (searchText: string) {
    prevSearchText = searchText;

    if (isCooldown) {
      return;
    }

    fun(searchText);
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;

      if (prevSearchText !== searchText) {
        fun(prevSearchText);
      }
    }, ms);
  };
}

const delayedSearch = debounce(
  (text: string) => store.dispatch(searchPosts(text)),
  500
);

export const PostList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const posts = useSelector((state: IState) => state.postsReducer.posts);
  const count = useSelector((state: IState) => state.postsReducer.count);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const loadMore = useCallback(() => {
    dispatch(fetchMorePosts());
  }, []);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);

      delayedSearch(event.target.value);
    },
    [setSearch]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(searchPosts(search));
      }
    },
    [search]
  );

  return (
    <>
      {/* <Slider /> */}
      <Container isImage={false}>
        <div className={styles.allPosts}>
          <div className={styles.title}>
            <Title text="All posts" />
            <Input value={search} onChange={onChange} onKeyDown={onKeyDown} />
          </div>

          {posts.length ? (
            <>
              <div className={styles.postList}>
                {posts.map((item) => (
                  <PostCard
                    key={item.id + Math.random().toString(16).slice(2)}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                    id={item.id}
                    onClick={() => {
                      history.push("/post/" + item.id);
                    }}
                  />
                ))}
              </div>

              <div className={styles.loadButton}>
                {posts.length !== count ? (
                  <Button
                    text="Load more"
                    onClick={() => {
                      loadMore();
                    }}
                  />
                ) : null}
              </div>
            </>
          ) : (
            <div className={styles.noPostsTitle}>
              <Title text="NO posts..." />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
