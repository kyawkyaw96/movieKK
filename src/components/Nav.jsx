import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, settoggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' bg-[#032541] lg:py-5 py-2 flex items-center justify-between lg:px-10'>
      <div className=' flex items-center gap-3 ml-2 lg:gap-4'>
        <Link to={"/"}>
          <img
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
            className=' w-36'
            alt=''
          />
        </Link>
        <h1 className=' text-white font-bold'>Movies</h1>
        <h1 className=' text-white font-bold'>TV Show</h1>
        <h1 className='hidden lg:block text-white font-bold'>People</h1>
        <h1 className=' text-white font-bold'>More</h1>
      </div>
      <div className='hidden lg:flex items-center bg-teal-600 px-3 py-2 rounded-md'>
        <BsSearch
          onClick={() => settoggle(!toggle)}
          className=' text-white text-xl'
        />
        <input
          type='text'
          className={
            toggle
              ? " hidden transform delay-800 "
              : "lg:block hidden transform delay-800 outline-none bg-transparent"
          }
          name=''
          id=''
        />
      </div>
    </nav>
  );
};

export default Nav;
