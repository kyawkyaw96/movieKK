import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovie,
  getPopularTv,
  getUpComingMovies,
  movieCast,
} from "../redux/api";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import FilterMovie from "../components/FilterMovie";
import { AnimatePresence } from "framer-motion";
import Movies from "./Movies";
import Tv from "./Tv";
import Footer from "../components/Footer";
import { comingMovies, getMovie, getTv } from "../redux/movieSlice";
import UpComing from "./UpComing";

const RoutePage = () => {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.movie.popular);
  const filteredMovie = useSelector((state) => state.movie.filterMovie);
  // console.log(popular);

  const getMovieData = async () => {
    const data = await getPopularMovie();
    const movie = data?.results;
    dispatch(getMovie(movie));
  };

  const tv = useSelector((state) => state.movie.tv);
  const getTvData = async () => {
    const data = await getPopularTv();
    const tv = data?.results;
    dispatch(getTv(tv));
  };
  // console.log(filterTv);

  // fetch upcoming movies
  const comingMovie = useSelector((state) => state.movie.upComing?.results);
  console.log(comingMovie);
  const comingData = async () => {
    const data = await getUpComingMovies();
    dispatch(comingMovies(data));
    console.log(data);
  };

  useEffect(() => {
    getMovieData();
    dispatch;
    getTvData();
    comingData();
  }, []);

  return (
    <div className=' font-Roboto overflow-y-hidden overflow-x-hidden bg-gray-300 '>
      <Nav />
      <Profile />
      <div className=''>
        <div className=' text-2xl text-black/80 font-bold flex items-center my-3 ms-1 lg:ms-3 '>
          Top Rating{" "}
          <h1 className=' px-4 py-1 text-sm ms-2  rounded-md text-green-900 font-bold border-green-900 border'>
            Movies
          </h1>
        </div>
        <div className=' w-full h-[300px] scroll-smooth overflow-y-hidden whitespace-nowrap select-none my-2'>
          {comingMovie?.map((c) => (
            <UpComing key={c?.id} c={c} />
          ))}
        </div>
      </div>
      <FilterMovie />

      <AnimatePresence>
        <div className=' w-full h-[350px] scroll-smooth snap-start overflow-y-hidden whitespace-nowrap select-none mt-2'>
          {filteredMovie?.map((movie) => (
            <Movies key={movie?.id} movie={movie} />
          ))}
        </div>
      </AnimatePresence>
      <div className=' w-full h-[350px] scroll-smooth overflow-y-hidden whitespace-nowrap select-none my-2'>
        {tv?.map((tv) => (
          <Tv key={tv?.id} tv={tv} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default RoutePage;
