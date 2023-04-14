import axios from "axios";

const popular_url =
  "https://api.themoviedb.org/3/movie/popular?api_key=be266615ba614a9b5e09a2f190ea0693&language=en-US&page=1";
export const getPopularMovie = async () => {
  const { data } = await axios.get(popular_url);

  return data;
};
const tv_url =
  "https://api.themoviedb.org/3/tv/popular?api_key=be266615ba614a9b5e09a2f190ea0693&language=en-US&page=1";
export const getPopularTv = async () => {
  const { data } = await axios.get(tv_url);
  return data;
};

