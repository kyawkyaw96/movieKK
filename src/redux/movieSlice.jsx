import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popular: [],
    filterMovie: [],
    tv: [],
  },
  reducers: {
    getMovie: (state, action) => {
      state.popular = action.payload;
      state.filterMovie = state.popular;
    },
    getTv: (state, action) => {
      state.tv = action.payload;
    },
    filterActionMovie: (state, action) => {
      if (action.payload === 0) {
        state.filterMovie = state.popular;
      } else {
        state.filterMovie = state.popular.filter((movie) =>
          movie.genre_ids.includes(action.payload)
        );
      }
    },
    searchMovie: (state, action) => {
      state.filterMovie = state.popular.filter((movie) =>
        movie.original_title
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
    
  },
});
export const { getMovie, getTv, filterActionMovie, searchMovie, } =
  movieSlice.actions;
export default movieSlice.reducer;
