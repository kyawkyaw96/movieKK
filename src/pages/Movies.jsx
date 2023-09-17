import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  // const movId = movie?.id;
  // console.log(`https://api.themoviedb.org/3/movie/${movId}/videos?api_key=be266615ba614a9b5e09a2f190ea0693&language=en-US`.results);
  // const [trailer, setTrailer] = useState([]);
  // const trailerVideo = async (movId) => {
  //   const trailerLink=`https://api.themoviedb.org/3/movie/${movId}/videos?api_key=be266615ba614a9b5e09a2f190ea0693&language=en-US`
  //   const {data} =
  //     await axios.get(trailerLink);
  //   console.log(data);
  //   setTrailer(data)
  //   console.log(trailer);
  // };
  // const detailId= "movie"
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 1, scale: 0 }}
        className='w-36 md:w-52 inline-block  m-2 hover:scale-110 transition bg-gray-800 rounded-bl-[20px] rounded-tr-[20px] p-3'
      >
        <div className='relative mb-2'>
          <img
            className='w-full h-60 rounded-xl'
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt=''
          />
          <div className=' shadow-lg bg-gradient-to-r from-blue-500 flex items-center justify-center bg-gray-600 rounded-md shadow-red-600 w-full p-5 h-60 opacity-0 transition-opacity duration-500 ease-in absolute top-0 right-0 hover:opacity-80'>
            <Link to={`/movieDetails/${movie?.id}`}>
              <button
                title='Watch on youtube'
                className=' font-semibold bg-red-600 shadow-red-500 text-white text-lg rounded-full py-1 px-3'
              >
                Trailer
              </button>
            </Link>
          </div>
        </div>

        <h1 className=' overflow-hidden ml-2 text-white text-lg font-bold'>
          {movie?.original_title}
        </h1>
        <h1 className=' ml-2 text-white text-sm'>{movie?.release_date}</h1>
      </motion.div>
    </>
  );
};

export default Movies;
