import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import CastImages from "./pages/CastImages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RoutePage />} />
        <Route path='/movieDetails/:id/' element={<MovieDetails />} />
        <Route path='/tvDetails/:id/' element={<TvDetails />} />
        <Route path='/castImage/:id/' element={<CastImages />} />
      </Routes>
    </div>
  );
};

export default App;
