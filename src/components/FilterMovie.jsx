import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActionMovie } from "../redux/movieSlice";

const FilterMovie = () => {
  const filteredMovie = useSelector((state) => state.movie.filterMovie);

  const dispatch = useDispatch();

  return (
    <div className=' m-4 overflow-y-hidden'>
      <button
        onClick={() => dispatch(filterActionMovie(0))}
        className=' px-3 py-1 text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500  rounded-md mr-2 hover:scale-105'
      >
        All
      </button>
      <button
        onClick={() => dispatch(filterActionMovie(28))}
        className=' px-3 py-1 text-white bg-gradient-to-r  hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500  rounded-md mr-2 hover:scale-105'
      >
        Action
      </button>
      <button
        onClick={() => dispatch(filterActionMovie(35))}
        className=' px-3 py-1 text-white bg-gradient-to-r  hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500  rounded-md hover:scale-105'
      >
        Comedy
      </button>
    </div>
  );
};

export default FilterMovie;
