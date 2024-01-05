import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieCast } from "../redux/api";
import Footer from "../components/Footer";

const CastImages = () => {
  const pharm = useParams();
  const id = pharm?.id;
  const [castImages, setCastImages] = useState([]);
  const [crewImages, setCrewImages] = useState([]);

  const fetchImage = async () => {
    const data = await movieCast(id);
    setCrewImages(data?.crew?.slice(0, 50));
    setCastImages(data?.cast?.slice(0, 50));
    console.log(crewImages);
  };
  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <div className=' w-full h-full '>
      <nav className=' bg-[#032541] py-2 lg:py-5 flex items-center justify-between lg:px-10'>
        <Link to={"/"}>
          <div className=' flex items-center gap-3 ml-2 lg:gap-4 hover:scale-105'>
            <img
              src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
              className=' w-36 '
              alt=''
            />
          </div>
        </Link>
      </nav>
      <div className='flex justify-between px-4 '>
        <div className=' flex-1 p-6'>
          <h1 className='text-xl my-2 font-bold font-mono'>Series Cast</h1>
          {castImages?.map((c) => (
            <div key={c.id} className=' my-4'>
              {c?.profile_path !== null && (
                <div className=' flex' key={c?.id}>
                  <img
                    className=' w-16 h-16 rounded-md mr-3'
                    src={`https://image.tmdb.org/t/p/w500/${c?.profile_path}`}
                    alt=''
                  />
                  <div className=' flex flex-col text-sm justify-center font-Roboto'>
                    <h1 className=' font-bold'>{c?.original_name}</h1>
                    <h2 className=''>{c?.character}</h2>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=' flex-1 p-6'>
          <h1 className=' text-xl my-2 font-bold font-mono'>Series Crew </h1>

          {crewImages?.map((c) => (
            <div key={c.id} className=' my-4'>
              {c?.profile_path !== null && (
                <div key={c?.id} className='flex'>
                  <img
                    className=' w-16 h-16 rounded-md mr-3'
                    src={`https://image.tmdb.org/t/p/w500/${c?.profile_path}`}
                    alt=''
                  />
                  <div className=' flex flex-col text-sm justify-center font-Roboto'>
                    <h1 className='  font-bold'>{c?.original_name}</h1>
                    <h1 className=' '>{c?.department}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CastImages;
