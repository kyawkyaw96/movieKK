import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Loading from "../Loader/Loading";
import { TfiControlForward } from "react-icons/tfi";
import { movieCast } from "../redux/api";
const TvDetails = () => {
  const param = useParams();
  // console.log(param);
  const id = param?.id;
  const [fullTvDetails, setFullTvDetails] = useState("");
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [castImages, setCastImages] = useState([]);
  const [bgImage, setBgImage] = useState("");

  const [loading, setLoading] = useState(true);

  const API_KEY = "4c7e427d910fa1bd3fa2ef8be5ebae64";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdlNDI3ZDkxMGZhMWJkM2ZhMmVmOGJlNWViYWU2NCIsInN1YiI6IjY0Mjk0MWIzYzA0NDI5MDFlODE3NjZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PwhsEBTu3O0R3uqbjHc6V9Utvox98-4StwotI6skxRw`,
    },
  };

  useEffect(() => {
    const tvDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          options
        );

        setFullTvDetails(response.data);
        console.log(response.data);
        setName(response.data?.genres[0]?.name);
        setName1(response.data?.genres[1]?.name);
        setName2(response.data?.genres[2]?.name);
        setBgImage(
          `https://image.tmdb.org/t/p/w500${response.data?.poster_path}`
        );
        setLoading(false); // Mark loading as complete
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false); // Mark loading as complete even on error
      }
    };

    tvDetails();
  }, []);

  useEffect(() => {
    // Log the updated state value when it changes
  }, [fullTvDetails]);

  const [trailerTv, setTrailerTv] = useState("");
  useEffect(() => {
    const fetchTvTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,

          {
            params: {
              api_key: API_KEY, // Replace with your own TMDB API key
            },
          }
        );
        const trailerData = response.data.results[0];
        setTrailerTv(trailerData?.key);
        // console.log(trailerTv);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };
    fetchTvTrailer();
  }, []);

  // cast image fetch
  const getMovieCast = async () => {
    // console.log(id);
    const data = await movieCast(id);
    const tv = data?.cast?.slice(0, 10);
    setCastImages(tv);
    console.log(data);
  };
  useEffect(() => {
    getMovieCast();
    console.log(castImages);
  }, []);

  document.cookie = "myCookie=myValue; SameSite=Lax";

  return (
    <div
      className=' bg-cover bg-scroll'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=' w-full h-full backdrop-blur '>
        <nav className=' bg-[#032541] sticky top-0 py-2 lg:py-5 flex items-center justify-between '>
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
        {/* <img src={`${bgImage}`} alt='' /> */}
        {fullTvDetails ? (
          <div className=' lg:flex  lg:items-center'>
            <div className=' m-[2.2rem] lg:m-20 drop-shadow-xl'>
              <img
                className=' h-[450px] rounded-lg object-cover hover:scale-105 transition'
                src={`https://image.tmdb.org/t/p/w500/${fullTvDetails?.poster_path}`}
                alt='Backdrop'
              />
            </div>
            <div className=' flex-1 gap-3 flex flex-col mx-3 px-3 pb-11'>
              <div className=' flex gap-2'>
                <button className=' px-3 py-1 text-sm text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md mr-2 '>
                  {name}
                </button>
                {name1 && (
                  <button className=' px-3 py-1 text-sm text-white bg-gradient-to-r from-green-400 to-blue-500  rounded-md mr-2 '>
                    {name1}
                  </button>
                )}
                {name2 && (
                  <button className=' px-3 py-1 text-sm text-white bg-gradient-to-r from-green-400 to-blue-500  rounded-md mr-2 '>
                    {name2}
                  </button>
                )}
              </div>
              <h1 className=' text-3xl text-white font-Noto font-bold'>
                {fullTvDetails?.original_name}
              </h1>
              <p className=' text-white flex font-bold'>
                Release Date -{" "}
                <span className=' italic'>
                  {" "}
                  {fullTvDetails?.first_air_date}{" "}
                </span>
              </p>
              <h1 className='text-gray-50 font-Roboto'>
                {fullTvDetails?.overview}
              </h1>
              <div className=' lg:flex flex-row gap-2 lg:mb-3'>
                <h1 className='mb-2 lg:mb-0 flex items-center gap-1 text-yellow-400 font-bold'>
                  <AiFillStar />
                  {fullTvDetails.vote_average} ({fullTvDetails?.popularity}{" "}
                  votes)
                </h1>
                <a
                  href={`https://www.youtube.com/embed/${trailerTv}`}
                  title='Movie Trailer'
                  className=' px-3 py-1  text-sm text-white bg-gradient-to-r  hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500  rounded-md mr-2 hover:scale-105'
                >
                  watch trailer
                </a>
              </div>
              <h1 className=' text-white font-Noto text-xl'>Series Cast</h1>
              <div className='flex flex-wrap lg:flex-nowrap'>
                {castImages?.map((castImg) => (
                  <div
                    className=' w-16 h-24 m-1 rounded-md '
                    key={castImg?.cast_id}
                  >
                    <img
                      className=' rounded-md w-full'
                      src={`https://image.tmdb.org/t/p/w500/${castImg?.profile_path}`}
                    ></img>
                  </div>
                ))}

                <div className=' w-16 h-24 m-1 flex items-center justify-center  '>
                  <Link
                    to={`/castImage/${id}`}
                    className=' hover:text-black/50 rounded-md text-sm text-white flex flex-col items-center'
                  >
                    see more <TfiControlForward />
                  </Link>
                </div>
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

export default TvDetails;
