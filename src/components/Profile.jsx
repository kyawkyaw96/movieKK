import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../redux/movieSlice";
import { motion } from "framer-motion";

const Profile = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchValue = (e) => {
    e.preventDefault();
    if (search != "") {
      dispatch(searchMovie(search));
    }
  };
  // console.log(popular);

  return (
    <div className=" bg-[#023F62] px-8 py-16 overflow-y-hidden">
      <motion.h1
        className="text-5xl block text-white font-bold mb-2"
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.1,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        Welcome.
      </motion.h1>
      <motion.h1
        className=" text-3xl text-white mb-4"
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </motion.h1>
      <form className=" rounded-full flex bg-white ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" text-sm w-full rounded-full pl-3 outline-none"
          name=""
          id=""
          placeholder="Search for a movie, tv show and person..."
        />
        <button
          onClick={searchValue}
          type="submit"
          className=" rounded-full h-full py-3 px-4 bg-[#19CFB4] text-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Profile;
