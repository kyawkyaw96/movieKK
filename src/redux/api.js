import axios from "axios";
const popular_url =
  "https://api.themoviedb.org/3/movie/popular?api_key=4c7e427d910fa1bd3fa2ef8be5ebae64&language=en-US&page=1";
export const getPopularMovie = async () => {
  const { data } = await axios.get(popular_url);

  return data;
};
const tv_url =
  "https://api.themoviedb.org/3/tv/popular?api_key=4c7e427d910fa1bd3fa2ef8be5ebae64&language=en-US&page=1";
export const getPopularTv = async () => {
  const { data } = await axios.get(tv_url);
  return data;
};
