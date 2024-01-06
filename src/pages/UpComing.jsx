import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
const UpComing = ({ c }) => {
  return (
    <div className='w-36 md:w-72 inline-block m-2 transition bg-gray-300  lg:p-3'>
      <div className=''>
        <div className='relative hb w-full h-full mb-2 hover:scale-105 transition-all'>
          <img
            className='w-full h-48 rounded-[10px]'
            src={`https://image.tmdb.org/t/p/w500/${c?.poster_path}`}
            alt=''
          />
          <FaPlay className=' absolute hover:scale-110 transition-all text-4xl top-1/2 left-1/2 text-white flex justify-center items-center inset-0' />
        </div>
        <h1 className=' text-gray-700 text-lg font-bold'>
          {(c?.title).substring(0, 23)}..
        </h1>
        <h1 className='mb-2 lg:mb-0 flex items-center gap-1 text-gray-700  font-bold'>
          <AiFillStar className='text-yellow-400 ' />
          {c?.vote_average} votes
        </h1>
      </div>
    </div>
  );
};

export default UpComing;
