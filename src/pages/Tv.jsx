import React from "react";
import { Link } from "react-router-dom";

const Tv = ({ tv }) => {
  return (
    <div className='w-36 md:w-52 inline-block  m-2  transition bg-gray-300  lg:p-3'>
      <div className='relative mb-2 hover:scale-105 transition-all'>
        <img
          className='w-full h-60 rounded-bl-[20px] rounded-tr-[20px]'
          src={`https://image.tmdb.org/t/p/w500/${tv?.poster_path}`}
          alt=''
        />
        <div className=' shadow-md bg-gradient-to-r from-blue-500 flex items-center justify-center bg-gray-600 rounded-bl-[20px] rounded-tr-[20px] shadow-red-400 w-full p-5 h-60 opacity-0 transition-opacity duration-500 ease-in absolute top-0 right-0 hover:opacity-90'>
          <Link to={`/tvDetails/${tv?.id}`}>
            <button
              title='Watch on youtube'
              className=' font-semibold bg-gray-300 shadow-gray-400 text-gray-800 text-lg rounded-full py-1 px-3'
            >
              Trailer
            </button>
          </Link>
        </div>
      </div>
      <h1 className=' text-gray-700 text-lg font-bold'>
        {(tv?.name).substring(0, 23)}..
      </h1>
      <h1 className=' text-gray-700 text-sm mb-10'>{tv?.first_air_date}</h1>
    </div>
  );
};

export default Tv;
