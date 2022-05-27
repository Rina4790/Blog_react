import { Dispatch } from "redux";

import { getPosts, LIMIT } from "../../services/posts";
import { ACTIONS } from "../constants";
import { IPost } from "../reducers/postsReducer";
import { IState } from "../store";

export const addPosts = (posts: IPost[], count: number, offset: number = 0) => {
  return {
    type: ACTIONS.ADD_POSTS,
    posts: posts,
    count,
    offset,
  };
};

export const fetchPosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset },
    } = getState();

    // const state = getState();
    // const { postsReducer } = state;
    // const { offset } = postsReducer;

    if (offset === 0) {
      const result = await getPosts(0);

      dispatch(addPosts(result.results, result.count));
    }
  };
};

export const fetchMorePosts = () => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    const {
      postsReducer: { offset, posts },
    } = getState();

    const result = await getPosts(offset + 5);

    dispatch(
      addPosts([...posts, ...result.results], result.count, offset + LIMIT)
    );
  };
};

export const addPost = (post: IPost) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};

export const fetchPost = (id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/" + id
    );
    const post = await response.json();

    dispatch(addPost(post));
  };
};

export const deletePost = () => {
  return { type: ACTIONS.DELETE_POST };
};

export const searchPosts = (search: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=100`
    );

    const result = await response.json();

    dispatch(addPosts(result.results, result.count));
  };
};
