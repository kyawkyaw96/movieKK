import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Movies = ({ movie }) => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 1, scale: 0 }}
        className='w-36 md:w-52 inline-block  m-2 hover:scale-110 transition bg-gray-300 lg:p-3'
      >
        <div className='relative mb-2 hover:scale-105 transition-all'>
          <img
            className='w-full h-60 rounded-[10px] '
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt=''
          />
          <Link to={`/movieDetails/${movie?.id}`}>
            <div className=' shadow-md bg-transparent bg-gradient-to-r from-blue-500 flex items-center justify-center bg-gray-600  rounded-[10px] shadow-red-400 w-full p-5 h-60 opacity-0 transition-opacity duration-500 ease-in absolute top-0 right-0 hover:opacity-80'>
              <FaPlay
                title='Watch on youtube'
                className=' text-4xl text-white/70'
              />
            </div>
          </Link>
        </div>

        <h1 className=' overflow-hidden ml-2 text-gray-700 text-lg font-bold'>
          {movie?.original_title}
        </h1>
        <h1 className=' ml-2 text-gray-700 text-sm'>{movie?.release_date}</h1>
      </motion.div>
    </>
  );
};

export default Movies;
