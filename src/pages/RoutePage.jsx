import { useDispatch, useSelector } from "react-redux";
import { getPopularMovie, getPopularTv, movieCast } from "../redux/api";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import FilterMovie from "../components/FilterMovie";
import { AnimatePresence } from "framer-motion";
import Movies from "./Movies";
import Tv from "./Tv";
import Footer from "../components/Footer";
import { getMovie, getTv } from "../redux/movieSlice";

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

  useEffect(() => {
    getMovieData();
    dispatch;
    getTvData();
  }, []);

  return (
    <div className=' font-Roboto overflow-y-hidden overflow-x-hidden bg-gray-300 '>
      <Nav />
      <Profile />
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
