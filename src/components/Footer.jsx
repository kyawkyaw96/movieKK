import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='  w-screen bg-[#032541] flex flex-wrap items-start justify-center gap-2 pt-10 pb-5'>
      <div className=' flex flex-col gap-1 lg:gap-3 items-center '>
        <div className='font-Noto  w-32 h-20 flex items-center justify-center rounded-md text-gray-600 hover:text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 '>
          <span className=' text-2xl tracking-wide font-bold'>Movie</span>{" "}
          <span className=' text-2xl'>KK</span>
        </div>
        <button className=' text-cyan-500 font-bold px-3 py-1 bg-white rounded-md'>
          Thank You
        </button>
      </div>
      <ul className=' text-xs lg:text-sm'>
        <li className=' text-white font-bold text-sm lg:text-lg'>THE BASICS</li>
        <li className=' text-white '>
          <a href='https://www.themoviedb.org/about'>About TMDB</a>
        </li>

        <li className=' text-white '>
          <a href='https://www.themoviedb.org/talk'> Support Forums</a>
        </li>
        <li className=' text-white '>
          <a href='https://www.themoviedb.org/documentation/api'>API</a>
        </li>
        <li className=' text-white '>
          <a href='https://status.themoviedb.org/'>System Status</a>
        </li>
      </ul>
      <ul className=' text-xs lg:text-sm'>
        <li className=' text-white font-bold text-sm lg:text-lg'>
          <a href='#'>GET INVOLVED</a>
        </li>
        <li className=' text-white '>
          <a href='https://www.themoviedb.org/bible'>Contribution Bible</a>
        </li>
        <li className=' text-white '>
          <a href='https://www.themoviedb.org/tv/new'>Add New Movie</a>
        </li>
        <li className=' text-white '>
          <a href='https://www.themoviedb.org/movie/new'>Add New TV Show</a>
        </li>
      </ul>
      <ul className=' text-xs lg:text-sm'>
        <li className=' text-white font-bold text-sm lg:text-lg'>
          <a href='#'>COMMUNITY</a>
        </li>
        <li className=' text-white '>
          <a href=''>Guidelines</a>
        </li>
        <li className=' text-white '>
          <a href=''>Discussions</a>
        </li>
        <li className=' text-white '>
          <a href=''>Leaderboard</a>
        </li>
        <li className=' text-white '>
          <a href=''>Twitter</a>
        </li>
      </ul>
      <ul className=' text-xs lg:text-sm'>
        {/* <Link to={"/contact"}> */}
        <li className=' text-white font-bold text-sm lg:text-lg'>
          <a href=''>CONTACT US</a>
        </li>
        {/* </Link> */}
        <li className=' text-white '>
          <a href=''>Developer- W Kyaw Kyaw</a>
        </li>
        <li className=' text-white '>
          <a href='tel:+959789799629'>Ph-09789799629</a>
        </li>
        <li className=' text-white '>
          <a href='mailto:www.winkyaw96@gmail.com'>
            Email- www.winkyaw96@gmail.com
          </a>
        </li>
        <li className=' text-white cursor-pointer'>
          <a href='https://github.com/kyawkyaw96'>GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
