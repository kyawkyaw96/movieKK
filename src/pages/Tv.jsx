import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tv = ({ tv }) => {
  const bgImg = tv?.poster_path;
  return (
    <div className='w-36 md:w-52 inline-block  m-2  transition bg-gray-300  lg:p-3'>
      <div className='relative mb-2 hover:scale-105 transition-all'>
        <img
          className='w-full h-60 rounded-[10px]'
          src={`https://image.tmdb.org/t/p/w500/${tv?.poster_path}`}
          alt=''
        />
        <Link to={`/tvDetails/${tv?.id}`}>
          <div className=' bg-transparent shadow-md bg-gradient-to-r from-blue-500 flex items-center justify-center bg-gray-600 rounded-[10px] shadow-red-400 w-full p-5 h-60 opacity-0 transition-opacity duration-500 ease-in absolute top-0 right-0 hover:opacity-90'>
            <FaPlay
              className=' text-4xl text-white/70'
              title='watch on youtube'
            />
          </div>
        </Link>
      </div>
      <h1 className=' text-gray-700 text-lg font-bold'>
        {(tv?.name).substring(0, 23)}..
      </h1>
      <h1 className=' text-gray-700 text-sm mb-10'>{tv?.first_air_date}</h1>
    </div>
  );
};

export default Tv;
