import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Header } from "../components/Header/Header";
import { PostList } from "../components/PostList/PostList";
import { Post } from "../components/Post/Post";
import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { Error } from "../components/Error/Error";
import { ConfirmEmail } from "../components/ConfirmEmail/ConfirmEmail";
import { AddPost } from "../components/AddPost/AddPost";

import { init } from "../redux/actions/authActions";
import { IState } from "../redux/store";

export const RootRouter = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:postId">
          <Post />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/confirm" component={ConfirmEmail} />
        <Route path="/addpost">
          {isLoggedIn ? <AddPost /> : <Redirect to={"/login"} />}
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
