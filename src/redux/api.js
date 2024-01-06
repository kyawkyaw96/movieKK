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
export const movieCast = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4c7e427d910fa1bd3fa2ef8be5ebae64&language=en-US&page=1`
  );
  return data;
};
export const tvCast = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=4c7e427d910fa1bd3fa2ef8be5ebae64&language=en-US&page=1`
  );
  return data;
};

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdlNDI3ZDkxMGZhMWJkM2ZhMmVmOGJlNWViYWU2NCIsInN1YiI6IjY0Mjk0MWIzYzA0NDI5MDFlODE3NjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PwhsEBTu3O0R3uqbjHc6V9Utvox98-4StwotI6skxRw",
  },
};
export const getUpComingMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  return data;
};
