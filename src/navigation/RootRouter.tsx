import { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import { AllPostsList } from "../components/AllPostsList/AllPostsList";
import { Header } from "../components/Header/Header";
import { LogIn } from "../components/LogIn/LogIn";
import styles from "./RR.module.css";
import { Button } from "../components/Button/Button";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <AllPostsList />
        </Route>
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={LogIn} />

        <Route path="/post/:postId" component={Post} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

const AuthTemplate = ({ children }: IProps) => {
  return <div>{children}</div>;
};

const Error = () => {
  const history = useHistory();
  return (
    <>
      <AuthTemplate>
        <div className={styles.error_img}>
          <img src="img/404i.png" />
        </div>
      </AuthTemplate>
      <div className={styles.error}>
        <p>We can't find the page you're looking for.</p>
        <Button onClick={() => history.goBack()}>goBack</Button>
      </div>
    </>
  );
};

interface IProps {
  children: ReactNode;
}

const Post = () => {
  const params: any = useParams();
  const [post, setPost] = useState<any>();
  const history = useHistory();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + params.postId
    );
    const post = await res.json();
    setPost(post);
    console.log(post.id);
  };

  return post ? (
    <div className={styles.container}>
      <Button onClick={() => history.goBack()}>goBack</Button>
      <div className={styles.card}>
        <img src={post.image} alt="" className={styles.img} />
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.text}> {post.text}</p>
        <p className={styles.date}> {post.date}</p>
      </div>
    </div>
  ) : null;
};
