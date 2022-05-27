import { tmsFetch } from "./helpers";

export const LIMIT = 5;

export const getPosts = async (offset: number) => {
  const response = await tmsFetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
  );

  const result = await response.json();

  return result;
};
