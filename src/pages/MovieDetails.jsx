import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Loading from "../Loader/Loading";

const MovieDetails = () => {
  const param = useParams();
  // console.log(param);
  const id = param?.id;
  const type = param?.type == "movie";

  const [fullMovieDetails, setFullMovieDetails] = useState("");

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  const API_KEY = "4c7e427d910fa1bd3fa2ef8be5ebae64";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdlNDI3ZDkxMGZhMWJkM2ZhMmVmOGJlNWViYWU2NCIsInN1YiI6IjY0Mjk0MWIzYzA0NDI5MDFlODE3NjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PwhsEBTu3O0R3uqbjHc6V9Utvox98-4StwotI6skxRw`,
    },
  };

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        console.log(response.data);
        setFullMovieDetails(response.data);
        setName(response.data?.genres[0]?.name);

        console.log(name);
        setLoading(false); // Mark loading as complete
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false); // Mark loading as complete even on error
      }
    };
    movieDetails();
  }, []);

  // useEffect(() => {
  //   // Log the updated state value when it changes
  // }, [fullMovieDetails]);

  const [trailerMovie, setTrailerMovie] = useState("");
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,

          {
            params: {
              api_key: API_KEY, // Replace with your own TMDB API key
            },
          }
        );
        const trailerData = response.data?.results[0];
        setTrailerMovie(trailerData?.key);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };
    fetchMovieTrailer();
  }, []);

  document.cookie = "myCookie=myValue; SameSite=Lax";

  return (
    <div className=''>
      <div className='bg-[#023F62] w-full h-full lg:fixed'>
        <nav className=' bg-[#032541] py-2 lg:py-5 flex items-center justify-between lg:px-10'>
          <Link to={"/"}>
            <div className=' flex items-center gap-3 ml-2 lg:gap-4'>
              <img
                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                className=' w-36'
                alt=''
              />
            </div>
          </Link>
        </nav>

        {fullMovieDetails ? (
          <div className=' lg:flex  lg:items-center'>
            <div className=' m-7 lg:m-20'>
              <img
                className=' h-[450px] rounded-lg object-cover'
                src={`https://image.tmdb.org/t/p/w500/${fullMovieDetails?.poster_path}`}
                alt='Backdrop'
              />
            </div>
            <div className=' flex-1 gap-3 flex flex-col mx-3 px-3 pb-11'>
              <div className=' flex gap-2'>
                <button className=' px-3 py-1 text-sm text-white bg-gradient-to-r from-green-400 to-blue-500  rounded-md mr-2 '>
                  {name}
                </button>
              </div>
              <h1 className=' text-3xl text-white font-Noto font-bold'>
                {fullMovieDetails?.original_title}
              </h1>
              <h1 className='text-gray-50 font-Roboto'>
                {fullMovieDetails?.overview}
              </h1>
              <div className=' lg:flex flex-row gap-2'>
                <h1 className='mb-2 lg:mb-0 flex items-center gap-1 text-yellow-400 font-bold'>
                  <AiFillStar />
                  {fullMovieDetails.vote_average} (
                  {fullMovieDetails?.popularity} votes)
                </h1>
                <a
                  href={`https://www.youtube.com/embed/${trailerMovie}`}
                  title='Movie Trailer'
                  className=' px-3 py-1  text-sm text-white bg-gradient-to-r from-green-400 to-blue-500 uppercase hover:from-pink-500 hover:to-yellow-500  rounded-md mr-2 hover:scale-105'
                >
                  watch trailer
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
