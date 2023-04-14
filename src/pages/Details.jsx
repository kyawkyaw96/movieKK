import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const param = useParams();
  // console.log(param);
  const id = param?.id;
  const type = param?.type=="movie"
  // console.log(type);
  
  const [trailerKey, setTrailerKey] = useState("");
  useEffect(() => {
    const fetchMovieTrailer = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/${type?"movie":"tv"}/${id}/videos`,
  
              {
                params: {
                  api_key: "be266615ba614a9b5e09a2f190ea0693", // Replace with your own TMDB API key
                },
              }
            );
  
            const trailerData = response.data.results[0];
            setTrailerKey(trailerData.key);
          } catch (error) {
            console.error("Error fetching movie trailer:", error);
          }
        
    
    };
    fetchMovieTrailer();
  }, []);
  // console.log(id);

  // // const cookies = document.cookie.split(';');
  // document.cookie = 'myCookie=myValue'
  // console.log(document.cookie);
  // cookies.forEach(cookie => {
  //   const [name, value] = cookie.trim().split('=');
  //   console.log(`Cookie name: ${name}`);
  //   console.log(`Cookie value: ${value}`);
  // });
  document.cookie = "myCookie=myValue; SameSite=Lax";

  return (
    <div>
      {trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          className=" w-full h-screen"
        />
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Details;

// class MyComponent extends React.Component {
//   componentDidMount() {
//     setCookie('myCookie', 'myValue', 7);
//   }

//   render() {
//     return <div>Hello World!</div>;
//   }
// }
