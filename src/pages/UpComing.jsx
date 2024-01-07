import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
const UpComing = ({ c }) => {
  return (
    <div className=' w-48 md:w-80 inline-block m-2 transition  lg:p-3'>
      <div className='relative group w-full h-48 mb-2 transition-all'>
        <img
          className='w-full h-full  group-hover:scale-105 transition-all rounded-[10px]'
          src={`https://image.tmdb.org/t/p/w500/${c?.poster_path}`}
          alt=''
        />
        <FaPlay className=' absolute group-hover:scale-150 transition-all top-1/3 left-[45%] text-5xl text-white/70' />
      </div>
      <h1 className=' text-white text-lg font-bold'>
        {(c?.title).substring(0, 23)}..
      </h1>
      <h1 className='mb-2 lg:mb-0 flex items-center gap-1 text-white  font-bold'>
        <AiFillStar className='text-yellow-400 ' />
        {c?.vote_average} votes
      </h1>
    </div>
  );
};

export default UpComing;
